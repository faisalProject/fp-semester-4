import { AlertController, ToastController, NavController } from '@ionic/angular';
import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';
import { LocalStorageService } from 'src/app/service/local-storage.service';
import { Router, ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-tambah-kandidat',
  templateUrl: './tambah-kandidat.page.html',
  styleUrls: ['./tambah-kandidat.page.scss'],
})
export class TambahKandidatPage implements OnInit {
  id:any
  isi:any

  form = {
    kelas: '',
    visi:'',
    misi:''
  }
  // DISINI JUGA
  picture:any;
  img:any

  constructor(
    private db:LocalStorageService,
    private alert:AlertController,
    private toast:ToastController,
    private route:Router,
    private active:ActivatedRoute,
  ) {

  }

  ngOnInit() {
    this.id = this.active.snapshot.paramMap.get('id')
    this.getData()
  }

  handleChange(event:any){
    this.form.kelas = event.detail.value;
  }

  public kelas:any =[
    'XII IPA 1', 'XII IPA 2', 'XII IPA 3', 'XI IPA 1', 'XI IPA 2', 'XI IPA 3', 'X IPA 1', 'X IPA 2', 'X IPA 3',
    'XII IPS 1', 'XII IPS 2', 'XII IPS 3', 'XI IPS 1', 'XI IPS 2', 'XI IPS 3', 'X IPA 1', 'X IPA 2', 'X IPA 3', 
  ];

  async getData(){
    const res = await fetch(environment.urlApi + `api/admin/show-student-data/${this.id}`,{
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

  async tambah(){

    const formData = new FormData();
    formData.append('vision',this.form.visi)
    formData.append('mission', this.form.misi)
    formData.append('picture', this.img)
    
    const res = await fetch(environment.urlApi + `api/admin/add-candidate/${this.id}`,{
      method:"POST",
      headers:{
       
        "Authorization": `Bearer ${this.db.get('token')}`
      },
      body:formData
    })

    const data = await res.json();
    console.log(data);
    console.log(this.img);

    if(data.statusCode !== 200){
      const alert = await this.alert.create({
        header: data.msg,
        message: data.message,
        buttons: ['OK']
      });
      await alert.present();
      return
    }

    const toast = await this.toast.create({
      message: 'Berhasil menambahkan kandidat',
      duration: 3000
    }).then((a)=>{
      a.present();
      this.route.navigateByUrl('/daftar-kandidat')
    })

  }

  loadImage(event:any){
    const file = event.target.files[0];
    const reader = new FileReader();

    reader.readAsDataURL(file);
    reader.onload = ()=>{
      // this.picture = reader.result;
      this.picture = reader.result;
      this.img = file;
    }

    reader.onerror = (error)=>{
      console.log(error);
    }
  }

}
