import { Component } from '@angular/core';
import { AlertController, ToastController } from '@ionic/angular';
import { Router } from '@angular/router';

import { environment } from 'src/environments/environment';
import { LocalStorageService } from '../service/local-storage.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  role:any;
  data:any
  form: any ={
    email:'',
    password: ''
  }

  constructor(
    public alertController : AlertController, 
    private router : Router,
    private local:LocalStorageService,
    private toast:ToastController
    ) {}

  async validate(message:any){
    const alert = await this.alertController.create({
      message : message,
      buttons:['OK']
    });
    await alert.present();
    
  }

  async login(){

    console.log("ini ROLE: "+ this.role);
    
    if (this.form.email == null || this.form.name == '') {
      this.validate('Harap isi Email!')
      return;
    }else if (this.form.password == null || this.form.password == ''){
      this.validate('Harap isi Password!')
      return;
    }else if(!this.role){
      this.validate("Harap isi Role!")
      return;
    }
    else if(this.role === "user"){
      try {
        const res = await fetch(environment.urlApi + 'api/login',{
          method: 'POST',
          headers : {
            'Content-Type': 'application/json'
          },
          body:JSON.stringify({
            email: this.form.email,
            password: this.form.password
          })
        })

        const data = await res.json(); 
  
       console.log(data);
      
       if( data.data.statusCode !== 200){
        this.alertController.create({
          message: data.data.statusCode,
          buttons: ['OK']
        }).then(a=>a.present())
        return;
      }
        this.local.remove('token')
        this.toast.create({
          message:'Berhasil!',
          duration:1000
        }).then(a=>{
          this.local.set('token', data.token)
          a.present()
          this.router.navigateByUrl('dashboard')
          }
        );
      } catch (error) {
        console.log(error);
        
        this.alertController.create({
          message:"Email atau Password Salah!",
          buttons:['OK']
        }).then(a=> a.present())
      }
     
    }else{
      try {
        const res = await fetch(environment.urlApi + "api/admin/login",{
          method:"POST",
          headers:{
            'Content-Type': 'application/json'
          },
          body:JSON.stringify({
            email: this.form.email,
            password: this.form.password
          })
        })

        const data = await res.json()
        console.log(data);
        
        if (data.data.statusCode !== 200) {
          this.alertController.create({
            message: data,
            buttons: ["OK"]
          }).then(a=>{
            console.log(data);
            
            a.present()
          })
          return;
        }
        this.toast.create({
          message: "Berhasil Login!",
          duration:1000
        }).then(a => {
          this.local.remove('token')
          this.local.set('token', data.token)
          a.present()
          this.router.navigateByUrl('daftar-akun')
        })
      } catch (error) {
        console.log(error);
        
      }
    }
      
    
  }

  // ngOnInit(){
  //   const token = this.local.get('token')
  //   if (token !== undefined || token !== null || token !=='') {
  //     this.router.navigateByUrl('dashboard')
  //   }
  // }


async register(){
    this.router.navigateByUrl('register')
  }
}

