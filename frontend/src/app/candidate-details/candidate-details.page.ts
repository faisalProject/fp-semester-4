import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AlertController, NavController, ToastController } from '@ionic/angular';
import { environment } from 'src/environments/environment';
import { DashboardPage } from '../dashboard/dashboard.page';
import { StorageService } from '../localStorage';
@Component({
  selector: 'app-candidate-details',
  templateUrl: './candidate-details.page.html',
  styleUrls: ['./candidate-details.page.scss'],
})
export class CandidateDetailsPage implements OnInit {
  isVoted: boolean = false;

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

  id:any;
  constructor(
    public router:Router, 
    private alertController: AlertController,
    private db: StorageService,
    private navCtrl: NavController,
    private route: ActivatedRoute,
    private toastCtrl: ToastController
 
    ) { }

  pilih(){
    const alert = this.alertController.create({
      message:"Yakin Pilih Kandidat?",
      buttons:[{
        text:"OK",
        handler: () => {
          this.submit();
        }
      },{
        text:"Cancel"
      }]
    }).then(alert => alert.present())
  }
  
  async candidat(){
    try{
      const res = await fetch(environment.urlApi + `api/student/show-candidate/${this.id}`, {
        method:'GET',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${this.db.get('token')}`
        } 
      })
        const json = await res.json();
        this.isi = json
        this.isVoted = json.data.already_vote 
      console.log(this.db.get('id'));

      console.log("HERE! "+ this.id);
    }catch(error){
      console.log(error);
      
    }
  }

 
  ngOnInit() {
    this.id =this.route.snapshot.paramMap.get('id')
    console.log('variabel' + this.id);
    
    this.candidat();
    this.navCtrl.pop
  }

  async submit(){

    try {
      const res = await fetch(environment.urlApi + `api/student/vote-candidate/${this.id}`, {
        method: 'POST',
        headers:{
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${this.db.get('token')}`
        }
      });
      const json = await res.json();
      const message = json.toString();
      console.log('ini json: ' + message);
      
      if(message.statusCode !== 200){
        this.alertController.create({
          message: message,
          buttons: ["OK"]
        }).then(a => a.present())
        return;
      }
      
    this.toastCtrl.create({
      message:"Berhasil!",
      duration:1000
    }).then(a => a.present())
      
    } catch (error) {
      console.log(error);
      
    }
  }

}
