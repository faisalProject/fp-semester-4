import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LocalStorageService } from 'src/app/service/local-storage.service';
import { environment } from 'src/environments/environment';
import { ActivatedRoute } from '@angular/router';
import { AlertController, ToastController } from '@ionic/angular';

@Component({
  selector: 'app-daftar-kandidat',
  templateUrl: './daftar-kandidat.page.html',
  styleUrls: ['./daftar-kandidat.page.scss'],
})
export class DaftarKandidatPage implements OnInit {
  isi: any = [];
  constructor(
    private route: Router,
    private db: LocalStorageService,
    private active: ActivatedRoute,
    private alert: AlertController,
    private toast: ToastController
  ) {
    active.params.subscribe((a) => {
      this.ngOnInit()
    })
   }

   

  async ngOnInit() {
    try {
      const res = await fetch(environment.urlApi + "api/admin/show-candidate", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${this.db.get('token')}`
        }
      })

      const data = await res.json()
      this.isi = data.data.data
      console.log(this.isi);

    } catch (error) {
      console.log(error);
    }
  }

  tambahKandidat(){
    this.route.navigateByUrl('tambah-kandidat')
  }

  editCandidate(id_kandidate:any) {
    this.route.navigateByUrl(`edit-data-kandidat/${id_kandidate}`)
  }

  async hapus(id:any){
    const res = await fetch(environment.urlApi + `api/admin/delete-student-data/${id}`,{
      method:"DELETE",
      headers:{
        "Content-Type": "application/json",
        "Authorization": `Bearer ${this.db.get('token')}`
      }
    })

    if(res.ok){
      const data = await res.json()
      console.log(data);
      this.toast.create({
        message: "Data berhasil dihapus",
        duration: 2000
      }).then((a)=>{
        a.present()
        this.ngOnInit()
      })
    }
   }

}
