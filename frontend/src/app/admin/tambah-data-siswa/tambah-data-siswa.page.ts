import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';
@Component({
  selector: 'app-tambah-data-siswa',
  templateUrl: './tambah-data-siswa.page.html',
  styleUrls: ['./tambah-data-siswa.page.scss'],
})
export class TambahDataSiswaPage implements OnInit {

  form = {
    nis:'',
    name: '',
    email: ''
  }
  constructor() { }

  async ngOnInit() {
    try {
      const res = await fetch(environment.urlApi + '')
    } catch (error) {
      
    }
  }

}
