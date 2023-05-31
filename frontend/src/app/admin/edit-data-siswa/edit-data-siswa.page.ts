import { Component, OnInit } from '@angular/core';
import { LocalStorageService } from 'src/app/service/local-storage.service';
import { environment } from 'src/environments/environment';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-edit-data-siswa',
  templateUrl: './edit-data-siswa.page.html',
  styleUrls: ['./edit-data-siswa.page.scss'],
})
export class EditDataSiswaPage implements OnInit {

  id:any;
  isi:any;
  constructor(
    private db:LocalStorageService,
    private route: ActivatedRoute,
    private router: Router,
    private toastController: ToastController
  ) { }

  async ngOnInit() {
    this.id = this.route.snapshot.paramMap.get('id')
    console.log(this.id);
    this.getDetail();
  }

  async getDetail(){
    try {
      const res = await fetch(environment.urlApi + `api/admin/show-student-data/${this.id}`,{
        method:"GET",
        headers:{
          "Content-Type": "application/json",
          "Authorization": `Bearer ${this.db.get('token')}`
        }
      })

      const data = await res.json();
      this.isi = data.data.data
      console.log(this.isi);
    } catch (error) {
      console.log(error);
    }
  }

  doSubmit(){
    this.editStudent()
  }

  editStudent(){
    const data = {
      "nis": this.isi.nis,
      "nama": this.isi.nama,
      "email": this.isi.email
    }

    fetch(environment.urlApi + `api/admin/update-student-data/${this.id}`,{
      method:"PUT",
      body:JSON.stringify(data),
      headers:{
        "Content-Type": "application/json",
        "Authorization": `Bearer ${this.db.get('token')}`
      }
    })
    .then(res => res.json())
    .then(data => {
      console.log(data);
      this.router.navigateByUrl('daftar-siswa')
    }, err => {
      console.log(err);
    })
  }
}
