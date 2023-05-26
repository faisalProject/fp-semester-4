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

    
    if (this.form.email == null || this.form.name == '') {
      this.validate('Harap isi Email!')
      return;
    }else if (this.form.password == null || this.form.password == ''){
      this.validate('Harap isi Password!')
      return;
    }
    else{
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
      
       if(typeof data === 'string'){
        this.alertController.create({
          message: "Error!",
          buttons: ['OK']
        }).then(a=>a.present())
        return;
      }

        this.toast.create({
          message:'Berhasil!',
          duration:2000
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

