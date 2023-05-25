import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TambahKandidatPageRoutingModule } from './tambah-kandidat-routing.module';

import { TambahKandidatPage } from './tambah-kandidat.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TambahKandidatPageRoutingModule
  ],
  declarations: [TambahKandidatPage]
})
export class TambahKandidatPageModule {}
