import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { environment } from 'src/environments/environment';
import { DashboardPage } from '../dashboard/dashboard.page';
import { StorageService } from '../localStorage';
@Component({
  selector: 'app-candidate-details',
  templateUrl: './candidate-details.page.html',
  styleUrls: ['./candidate-details.page.scss'],
})
export class CandidateDetailsPage implements OnInit {
  constructor(
    public router:Router, 
    private alertController: AlertController,
    private db: StorageService,
    // private dash:DashboardPage
    ) { }

  pilih(){
    const alert = this.alertController.create({
      message:"Yakin Pilih Kandidat?",
      buttons:[{
        text:"OK",
      },{
        text:"Cancel"
      }]
    }).then(alert => alert.present())
  }
  async ngOnInit() {

    try{
      const res = await fetch(environment.urlApi + `api/student/show-candidate/${this.db.get('id')}`, {
        method:'GET',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${this.db.get('token')}`
        } 
      })
      
       const data = await res.json();

      console.log("HERE!"+ data.msg);
    }catch(error){
      console.log(error);
      
    }

    
  }

}
