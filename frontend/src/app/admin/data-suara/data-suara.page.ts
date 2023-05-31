import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LocalStorageService } from 'src/app/service/local-storage.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-data-suara',
  templateUrl: './data-suara.page.html',
  styleUrls: ['./data-suara.page.scss'],
})
export class DataSuaraPage implements OnInit {

  isi: any = [];
  constructor(
    // private route: Router,
    private db: LocalStorageService
  ) { }

  async ngOnInit() {
    try {
      const res = await fetch(environment.urlApi + "api/admin/show-votes", {
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
      console.log(error)
    }
  }

}
