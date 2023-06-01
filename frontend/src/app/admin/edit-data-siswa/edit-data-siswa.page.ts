import { DaftarSiswaPage } from './../daftar-siswa/daftar-siswa.page';
import { Component, OnInit } from '@angular/core';
import { LocalStorageService } from 'src/app/service/local-storage.service';
import { environment } from 'src/environments/environment';
import { ActivatedRoute, Router } from '@angular/router';
import { NavController } from '@ionic/angular';
import { AlertController, ToastController } from '@ionic/angular';
// import { DaftarSiswaPage } from '../daftar-siswa/daftar-siswa.page';
@Component({
  selector: 'app-edit-data-siswa',
  templateUrl: './edit-data-siswa.page.html',
  styleUrls: ['./edit-data-siswa.page.scss'],
})
export class EditDataSiswaPage implements OnInit {
  
  id:any;
  isi:any;
  constructor(
    private db:LocalStorageService,
    private route: ActivatedRoute,
    private router: Router,
    private toastController: ToastController,
    private alert:AlertController,
    private navCtrl:NavController,
    private daftar:DaftarSiswaPage
  ) { }
    
  async ngOnInit() {
    this.id = this.route.snapshot.paramMap.get('id')
    console.log(this.id);
    this.getDetail();
  }

  async getDetail(){
    try {
      const res = await fetch(environment.urlApi + `api/admin/show-student-data/${this.id}`,{
        method:"GET",
        headers:{
          "Content-Type": "application/json",
          "Authorization": `Bearer ${this.db.get('token')}`
        }
      })

      const data = await res.json();
      this.isi = data.data.data
      console.log(this.isi);
    } catch (error) {
      console.log(error);
    }
  }

  doSubmit(){
    // console.log(this.);
    
    this.editStudent()
  }

  async editStudent(){

    
    const res = await fetch(environment.urlApi + `api/admin/update-student-data/${this.id}`,{
      method:"PUT",
      body:JSON.stringify({
        nis:this.isi.nis,
        name: this.isi.nama,
        email: this.isi.email
      }),
      headers:{
        "Content-Type": "application/json",
        "Authorization": `Bearer ${this.db.get('token')}`
      }
    })
    const ini = await res.json();
    console.log(ini);
    
    if(ini.statusCode !== 200){
      this.alert.create({
        message: ini.msg,
        buttons:['OK']
       
      }).then(a=> {
        
        a.present()
  
      })
      return
    }
    this.toastController.create({
      message:ini.msg,
      duration:1000
    }).then(a=>{ 
      a.present();
      
      this.router.navigate(['daftar-siswa']).then(()=>{
        this.ngOnInit()
      })
     
      })
    }
  }
  

