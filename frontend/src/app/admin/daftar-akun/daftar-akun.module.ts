import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DaftarAkunPageRoutingModule } from './daftar-akun-routing.module';

import { DaftarAkunPage } from './daftar-akun.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DaftarAkunPageRoutingModule
  ],
  declarations: [DaftarAkunPage]
})
export class DaftarAkunPageModule {}
