import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LocalStorageService } from 'src/app/service/local-storage.service';
import { environment } from 'src/environments/environment';
import { NavController } from '@ionic/angular';
import { AlertController } from '@ionic/angular';
import { ActivatedRoute } from '@angular/router';
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
    private NavCtrl:NavController,
    private alert:AlertController,
    private active:ActivatedRoute
  ) {
    active.params.subscribe((a)=>{
      this.ngOnInit()
    })
   }

  async ngOnInit() {
   this.getData()
  }

  async getData(){
    const res = await fetch(environment.urlApi + "api/admin/show-student-data",{
      mode:"cors",
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

  // fungsi untuk menjalankan hapus data
  delete(a:any){
    this.alert.create({
      message: "Apakah anda yakin ingin menghapus data ini ?",
      buttons:[{
        text:"OK",
        role:"OK",
        handler:()=>{
          this.hapus(a) // menghapus data
          this.ngOnInit()
        }
      },{
        text:"Cancel",
        role:"Cancel"
      }
    ]
    }).then((a)=>{a.present()})
  }

  // fungsi untuk menghapus data
  async hapus(a:any){
    const res = await fetch (environment.urlApi + `api/admin/delete-student-data/${a}`,{
      method:"DELETE",
      headers:{
        "Content-Type": "application/json",
        "Authorization": `Bearer ${this.db.get('token')}`
      }
    })

    const data = await res.json()
    console.log(data);
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

  addCandidate(id:any){
    this.NavCtrl.navigateForward(`tambah-kandidat/${id}`)
  }
}


