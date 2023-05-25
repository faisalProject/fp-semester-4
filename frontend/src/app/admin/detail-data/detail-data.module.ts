import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DetailDataPageRoutingModule } from './detail-data-routing.module';

import { DetailDataPage } from './detail-data.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DetailDataPageRoutingModule
  ],
  declarations: [DetailDataPage]
})
export class DetailDataPageModule {}
