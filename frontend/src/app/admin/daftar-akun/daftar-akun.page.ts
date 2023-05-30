import { Component, OnInit } from '@angular/core';
import { LocalStorageService } from 'src/app/service/local-storage.service';
import { environment } from 'src/environments/environment';
@Component({
  selector: 'app-daftar-akun',
  templateUrl: './daftar-akun.page.html',
  styleUrls: ['./daftar-akun.page.scss'],
})
export class DaftarAkunPage implements OnInit {

  isi:any =[];
  constructor(
    private db: LocalStorageService
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

}
