import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LocalStorageService } from 'src/app/service/local-storage.service';
import { environment } from 'src/environments/environment';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-daftar-akun',
  templateUrl: './daftar-akun.page.html',
  styleUrls: ['./daftar-akun.page.scss'],
})
export class DaftarAkunPage implements OnInit {

  isi:any =[];
  constructor(
    private db: LocalStorageService,
    private route: Router,
    private navCtrl:NavController
    ) { }

  async ngOnInit() {
    try{
    const res = await fetch(environment.urlApi + "api/admin/show-account", {
      method : "GET",
      headers :{
        "Content-Type": "application/json",
        "Authorization" : `Bearer ${this.db.get('token')}`
      }
    })
    
    const data = await res.json()
    this.isi=data.data.data
    console.log(this.isi);
    
    
  }catch(error){
    console.log('Error: ' + error);
    
  }
  
}

addCandidate(id:any){
  this.navCtrl.navigateForward(`tambah-kandidat/${id}`)
}

accountDetails(id:any) {
  this.route.navigateByUrl(`detail-akun/${id}`)
}

}
