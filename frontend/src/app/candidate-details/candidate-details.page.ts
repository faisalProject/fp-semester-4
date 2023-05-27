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
    private dash:DashboardPage,
    private db: StorageService
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
    const res = await fetch(environment.urlApi + `localhost:8000/api/student/show-candidate/${this.dash.id}`, {
      method:'GET',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${this.db.get('token')}`
      } 
    })
    
    const data = await res.json();
    console.log(data);
    
  }

}
