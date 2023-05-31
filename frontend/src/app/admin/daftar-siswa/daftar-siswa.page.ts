import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-daftar-siswa',
  templateUrl: './daftar-siswa.page.html',
  styleUrls: ['./daftar-siswa.page.scss'],
})
export class DaftarSiswaPage implements OnInit {

  constructor(
    private route: Router
  ) { }

  ngOnInit() {
  }

  studentDetails() {
    this.route.navigateByUrl('detail-data');
  }

  tambahSiswa() {
    this.route.navigateByUrl('tambah-data-siswa')
  }

  editStudent() {
    this.route.navigateByUrl('edit-data-siswa')
  }

}
