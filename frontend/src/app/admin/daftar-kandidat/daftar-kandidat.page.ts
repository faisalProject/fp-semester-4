import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-daftar-kandidat',
  templateUrl: './daftar-kandidat.page.html',
  styleUrls: ['./daftar-kandidat.page.scss'],
})
export class DaftarKandidatPage implements OnInit {

  constructor(
    private route: Router
  ) { }

  ngOnInit() {
  }

  tambahKandidat(){
    this.route.navigateByUrl('tambah-kandidat')
  }

  editCandidate() {
    this.route.navigateByUrl('edit-data-kandidat')
  }
}
