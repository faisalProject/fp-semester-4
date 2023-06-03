import { AlertController, ToastController, NavController } from '@ionic/angular';
import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';
import { LocalStorageService } from 'src/app/service/local-storage.service';
import { Router, ActivatedRoute } from '@angular/router';
import { get } from 'http';
@Component({
  selector: 'app-edit-data-kandidat',
  templateUrl: './edit-data-kandidat.page.html',
  styleUrls: ['./edit-data-kandidat.page.scss'],
})
export class EditDataKandidatPage implements OnInit {
  id:any;
  isi:any;
  form:any = {
    vision:'',
    mission:'',
    picture:''
  };
  img:any;

  constructor(
    private db:LocalStorageService,
    private alert:AlertController,
    private toast:ToastController,
    private route:Router,
    private active:ActivatedRoute,
  ) { 
    active.params.subscribe((params)=>{
      this.ngOnInit()
    })
  }

  ngOnInit() {
    this.id = this.active.snapshot.paramMap.get('id') 
    this.getData()
  }

  async getData(){
    const res = await fetch(environment.urlApi + `api/admin/show-candidate/${this.id}`,{
      method:"GET",
      headers:{
        "Content-Type": "application/json",
        "Authorization": `Bearer ${this.db.get('token')}`
      }
    })

    const data = await res.json();
    this.isi = data.data.data
    console.log(data.data.data);
  }

  loadImage(event:any){
    const file = event.target.files[0];
    const reader = new FileReader();

    reader.readAsDataURL(file);
    reader.onload = ()=>{
      // this.picture = reader.result;
      this.isi.gambar = reader.result;
      this.img = file;
    }

    reader.onerror = (error)=>{
      console.log(error);
    }
  }

  async editKandidat(){
    const formData = new FormData();
    formData.append('vision', this.form.vision);
    formData.append('mission', this.form.mission);
    formData.append('picture', this.img)
    formData.append('_method', 'PUT')

    const res = await fetch(environment.urlApi + `api/admin/update-candidate/${this.id}`,{
      method:"POST",
      headers:{
        "Authorization": `Bearer ${this.db.get('token')}`
      },
      body:formData
    })

    const data = await res.json();
    console.log("daya");

    if(data.statusCode !== 200){
      this.alert.create({
        header: 'Gagal',
        message: data.msg,
        buttons: ['OK']
      }).then(res=>{
        res.present()
      })
      return
    }

    this.toast.create({
      message: data.msg,
      duration: 2000
    }).then(res=>{
      res.present()
      this.route.navigateByUrl('/daftar-kandidat'),
      this.form.vision = '',
      this.form.mission = ''
    })


  }
}
