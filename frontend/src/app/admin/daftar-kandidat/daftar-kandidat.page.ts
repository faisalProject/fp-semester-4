import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LocalStorageService } from 'src/app/service/local-storage.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-daftar-kandidat',
  templateUrl: './daftar-kandidat.page.html',
  styleUrls: ['./daftar-kandidat.page.scss'],
})
export class DaftarKandidatPage implements OnInit {
  isi: any = [];
  constructor(
    private route: Router,
    private db: LocalStorageService
  ) { }

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

  editCandidate() {
    this.route.navigateByUrl('edit-data-kandidat')
  }
}
