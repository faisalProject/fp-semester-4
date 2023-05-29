import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AlertController, NavController } from '@ionic/angular';
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

  id:any;
  constructor(
    public router:Router, 
    private alertController: AlertController,
    private db: StorageService,
    private navCtrl: NavController,
    private route: ActivatedRoute
 
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

  async candidat(){
    try{
      const res = await fetch(environment.urlApi + `api/student/show-candidate/${this.id}`, {
        method:'GET',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${this.db.get('token')}`
        } 
      })
      
        this.isi = await res.json();
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

  // ngAfterViewChecked(){

  // }
  // ngOnDestroy(){
  //   this.isi.data.data.email = '';
  //   this.isi.data.data.gambar = '';
  //   this.isi.data.data.id_kandidat = '';
  //   this.isi.data.data.kelas = '';
  //   this.isi.data.data.misi = '';
  //   this.isi.data.data.nama = '';
  //   this.isi.data.data.nis = '';
  //   this.isi.data.data.visi = '';
  //   console.log('ngOnDestroy trigger');
    
  

}
