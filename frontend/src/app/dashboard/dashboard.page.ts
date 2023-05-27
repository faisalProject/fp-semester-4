import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';
import { StorageService } from '../localStorage';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.page.html',
  styleUrls: ['./dashboard.page.scss'],
})
export class DashboardPage implements OnInit {
 
  public id:any;
  public data ={
    data:{
      data:[{
        gambar:'',
        id_kandidate:'',
        kelas:'',
        misi:'',
        nama:'',
        nis: '',
        visi: ''
      }]
    }
  }
  
  constructor(
    public router:Router, 
    private db:StorageService
  ) { }


  open(ev:any){
    this.db.set('id', ev)
    // console.log(this.db.get('id'));
    
    
    this.router.navigateByUrl('candidate-details')
  }
  async ngOnInit() {
    try {
      const res = await fetch(environment.urlApi + "api/student/show-candidate", {
        method: "GET",
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${this.db.get('token')}`
        }
      })

      this.data = await res.json();
 
      // console.log(this.data.data.data);
      
    } catch (error:any) {
      console.log(error);
      
    }
  }

}
