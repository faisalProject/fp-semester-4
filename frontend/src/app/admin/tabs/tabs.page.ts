import { Component, OnInit } from '@angular/core';
import { StorageService } from 'src/app/localStorage';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.page.html',
  styleUrls: ['./tabs.page.scss'],
})
export class TabsPage implements OnInit {

  constructor(
    private db:StorageService,
    private route:Router,
    private alert:AlertController
  ) { }

  logout(){

    this.alert.create({
      message:"Yakin Mau Keluar?",
      buttons:[{
        text:"OK",
        role:"ok",
        handler:(a => {
          this.db.remove('token')
          this.route.navigateByUrl('home')
        })
      },{
        text:"CANCEL",
        role:"cancel"
      }]
    }).then(a=> a.present())
  }
  ngOnInit() {
  }

}
