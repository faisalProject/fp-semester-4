import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TambahDataSiswaPageRoutingModule } from './tambah-data-siswa-routing.module';

import { TambahDataSiswaPage } from './tambah-data-siswa.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TambahDataSiswaPageRoutingModule
  ],
  declarations: [TambahDataSiswaPage]
})
export class TambahDataSiswaPageModule {}
