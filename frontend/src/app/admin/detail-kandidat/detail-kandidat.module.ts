import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DetailKandidatPageRoutingModule } from './detail-kandidat-routing.module';

import { DetailKandidatPage } from './detail-kandidat.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DetailKandidatPageRoutingModule
  ],
  declarations: [DetailKandidatPage]
})
export class DetailKandidatPageModule {}
