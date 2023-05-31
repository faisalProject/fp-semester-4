import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { environment } from 'src/environments/environment';
import { LocalStorageService } from 'src/app/service/local-storage.service';

@Component({
  selector: 'app-detail-akun',
  templateUrl: './detail-akun.page.html',
  styleUrls: ['./detail-akun.page.scss'],
})
export class DetailAkunPage implements OnInit {
  id:any;
  isi:any;
  constructor(
    private idRoute:ActivatedRoute,
    private db: LocalStorageService
  ) { }

  async ngOnInit() {
    this.id = this.idRoute.snapshot.paramMap.get('id')
    console.log(this.id);
    this.getDetail();
  }

  async getDetail(){


    try {
      
      const res = await fetch(environment.urlApi + `api/admin/show-account/${this.id}`,
    {
      method:"GET",
      headers:{
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${this.db.get('token')}`
      }
    });
    const data = await res.json()
    
    console.log(data);
    this.isi = await data.data.data
    console.log(this.isi);
    

    } catch (error) {
      console.log(error);
      
    }
    
  }

}
