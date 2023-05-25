import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DaftarSiswaPageRoutingModule } from './daftar-siswa-routing.module';

import { DaftarSiswaPage } from './daftar-siswa.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DaftarSiswaPageRoutingModule
  ],
  declarations: [DaftarSiswaPage]
})
export class DaftarSiswaPageModule {}
