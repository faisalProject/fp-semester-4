import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DaftarKandidatPageRoutingModule } from './daftar-kandidat-routing.module';

import { DaftarKandidatPage } from './daftar-kandidat.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DaftarKandidatPageRoutingModule
  ],
  declarations: [DaftarKandidatPage]
})
export class DaftarKandidatPageModule {}
