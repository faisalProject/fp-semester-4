import { AlertController, ToastController, NavController } from '@ionic/angular';
import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';
import { LocalStorageService } from 'src/app/service/local-storage.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-tambah-data-siswa',
  templateUrl: './tambah-data-siswa.page.html',
  styleUrls: ['./tambah-data-siswa.page.scss'],
})

export class TambahDataSiswaPage implements OnInit {

  form = {
    nis:'',
    name: '',
    email: ''
  }
  constructor(
    private db:LocalStorageService,
    private alert:AlertController,
    private toast:ToastController,
    private route:Router
  ) { }

  
  async tambah(){
    try {
      const res = await fetch(environment.urlApi + 'api/admin/add-student-data',{
        method:"POST",
        headers:{
          "Content-Type": "application/json",
          "Authorization": `Bearer ${this.db.get('token')}`
        },
        body:JSON.stringify({
          nis:this.form.nis,
          name:this.form.name,
          email:this.form.email
        }),
      })
      const data = await res.json();
      console.log(data);
      if (data.statusCode !== 200) {
        this.alert.create({
          header:"Gagal",
          message:"Data Gagal Ditambahkan",
          buttons:['OK']
        }).then((a)=>{a.present()})
        return
      }
      this.toast.create({
        message:"Data Berhasil Ditambahkan",
        duration:2000
      }).then((a)=>{
        a.present()
        this.route.navigate(['daftar-siswa'],{replaceUrl:true})
      })
    } catch (error) {
      console.log(error);
      
    }
  }

  async ngOnInit() {
    
  }

}
