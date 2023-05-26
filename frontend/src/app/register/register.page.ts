import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';
import { StorageService } from '../localStorage';
import { type } from 'os';
import { AlertController } from '@ionic/angular';
import { ok } from 'assert';
@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {
  private item:any;

  form:any={
    nis:'',
    email:'',
    kelas: '',
    password: '',
    conPass: ''
    
  }
  public kelas:any =[
    'XII IPA 1', 'XII IPA 2', 'XI IPA 1', 'XI IPA 2', 'X IPA 1', 'X IPA 2',
    'XII IPS 1', 'XII IPS 2', 'XI IPS 1', 'XI IPS 2', 'X IPA 1', 'X IPA 2' 
  ];

  constructor(
    private router:Router,
    private local : StorageService,
    private alert:AlertController,
    ) { }

  login(){
    this.router.navigateByUrl('home')
  }
  ngOnInit() {
  }

  handleChange(event:any){
    this.form.kelas = event.detail.value;
  }

   async register(){
      
      if(!this.form.nis || !this.form.email || !this.form.kelas || !this.form.password || !this.form.conPass ){
        this.alert.create(
          {
            message:"Harap isi form dengan benar",
            buttons: ["OK"]
          }
        ).then(a=>{
          a.present()
         
        })
        return;
      }
      // if(this.form.password !== this.form.conPass){
      //   this.alert.create({
      //     message:"Password dan Confrimasi Password tidak sama!",
      //     buttons: ["OK"]
      // }).then(a=>{
      //   a.present()
      //   return;
      // })

      // }
        try{
          const req = await fetch(environment.urlApi + "api/register", {
            method: "POST",
            headers:{
              'Content-Type': 'application/json'
            },
            body:JSON.stringify({
              nis: this.form.nis,
              email: this.form.email,
              class_name: this.form.kelas,
              password: this.form.password,
              confirmation_password: this.form.conPass
            })
          })

          const data = await req.json()
          console.log(data)
          if(data.statusCode !== 200){
            this.alert.create({
              message: data.msg,
              buttons: ['OK']
            }).then(a=>{
              a.present()
              ;
              
            })
            return;
          }
          
        }catch (error:any) {
          this.alert.create({
            message: error,
            buttons: ["OK"]
          })
         
        }
      }
    }

