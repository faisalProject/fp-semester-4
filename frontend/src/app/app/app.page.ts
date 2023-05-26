import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { DashboardPage } from '../dashboard/dashboard.page';
import { LocalStorageService } from '../service/local-storage.service';

@Component({
  selector: 'app-app',
  templateUrl: './app.page.html',
  styleUrls: ['./app.page.scss'],
})
export class AppPage {

  constructor(private router:Router, private alertController: AlertController, private local:LocalStorageService) { }

  logout(){
   const alert = this.alertController.create({
    message:"Yakin mau keluar?",
    buttons: [{
      text:'Oke',
      role:"oke",
      handler:(he)=> {
        this.local.remove('token');
        this.router.navigateByUrl('home')

      }
    },{
      text:'Cancel',

    }
  ]
   }).then(alert => alert.present());

  }
  ngOnInit() {
    const token = this.local.get('token')
    if (!token || token===undefined) {
      this.router.navigateByUrl('home')
    }
  }

}
