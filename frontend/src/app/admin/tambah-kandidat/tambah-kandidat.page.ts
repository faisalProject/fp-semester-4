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

  // BERMASALAH DISINI BOY!!
  onFileChange(event:FileList) {
    const file = event.item(0)
    if (file) {
      this.picture = file
    }
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
    const res = await fetch(environment.urlApi + `api/admin/add-candidate/${this.id}`,{
      method:"POST",
      headers:{
        "Content-Type": "application/json",
        "Authorization": `Bearer ${this.db.get('token')}`
      },
      body:JSON.stringify({
        vision:this.form.visi,
        mission:this.form.misi,
        picture:this.picture,
      })
    })

    const data = await res.json();
    console.log(data);
    console.log(this.picture);

    if(data.status !== 200){
      const alert = await this.alert.create({
        header: 'Gagal',
        message: data.message,
        buttons: ['OK']
      });
      await alert.present();
      return
    }

    const toast = await this.toast.create({
      message: 'Berhasil menambahkan kandidat',
      duration: 2000
    }).then((a)=>{
      a.present();
      this.route.navigateByUrl('/daftar-kandidat')
    })

  }

}
