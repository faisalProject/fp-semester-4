import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DetailAkunPageRoutingModule } from './detail-akun-routing.module';

import { DetailAkunPage } from './detail-akun.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DetailAkunPageRoutingModule
  ],
  declarations: [DetailAkunPage]
})
export class DetailAkunPageModule {}
