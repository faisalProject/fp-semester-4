import { Component } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  form: any ={}
  constructor(public alertController : AlertController, private router : Router ) {}

   async login(){
    if (this.form.email === '' || this.form.password === '') {
      const alert = await this.alertController.create({
        message: "harap isi form dengan benar!",
        buttons: ['OK']
      });
      await alert.present();
    }
  else{
     this.router.navigateByUrl('dashboard')
    }
    this.form.email ='';
    this.form.password='';

  
  }

  async register(){
    this.router.navigateByUrl('register')
  }

}
