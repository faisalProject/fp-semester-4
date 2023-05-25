import { Component } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  
  form: any ={}

  constructor(
    public alertController : AlertController, 
    private router : Router,

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
        });

        const data = await res.json(); 
        console.log(data);
      } catch (error) {
        
      }
     
    }
      
    
  }

  


async register(){
    this.router.navigateByUrl('register')
  }
}

