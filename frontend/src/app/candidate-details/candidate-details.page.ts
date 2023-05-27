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

  public isi = {
    data:{
      data:{
        id_kandidat: '',
        gambar: '',
        nama: '',
        nis: '',
        kelas: '',
        email: '',
        visi: '',
        misi: '',
      }
    }
  }

  constructor(
    public router:Router, 
    private alertController: AlertController,
    private db: StorageService,
 
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
      
        this.isi = await res.json();
      console.log(this.db.get('id'));
      // data.forEach((a: any) => {
      //   console.log(a);
      // });
      console.log("HERE! "+ this.isi.data.data.id_kandidat);
    }catch(error){
      console.log(error);
      
    }

    
  }

}
