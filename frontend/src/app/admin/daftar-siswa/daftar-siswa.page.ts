import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LocalStorageService } from 'src/app/service/local-storage.service';
import { environment } from 'src/environments/environment';
import { NavController } from '@ionic/angular';
@Component({
  selector: 'app-daftar-siswa',
  templateUrl: './daftar-siswa.page.html',
  styleUrls: ['./daftar-siswa.page.scss'],
})
export class DaftarSiswaPage implements OnInit {

  isi:any=[]
  constructor(
    private route: Router,
    private db:LocalStorageService,
    private NavCtrl:NavController
  ) { }

  async ngOnInit() {
    const res = await fetch(environment.urlApi + "api/admin/show-student-data",{
      method:"GET",
      headers:{
        "Content-Type": "application/json",
        "Authorization": `Bearer ${this.db.get('token')}`
      }
    })

    const data = await res.json();
    this.isi = data.data.data
    console.log(data.data.data);
    
  }

  async delete(a:any){
    const res = await fetch (environment.urlApi + `api/admin/delete-student-data/${a}`,{
      method:"Delete",
      headers:{
        "Content-Type": "application/json",
        "Authorization": `Bearer ${this.db.get('token')}`
      }
    })

    const data = await res.json()
    console.log();
    

  }

  studentDetails(id:any) {
    this.route.navigateByUrl(`detail-data/${id}`);
  }

  tambahSiswa() {
    this.route.navigateByUrl('tambah-data-siswa')
  }

  editStudent(id:any) {
    this.NavCtrl.navigateForward(`edit-data-siswa/${id}`)
    }
}


