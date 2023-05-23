import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DataSuaraPageRoutingModule } from './data-suara-routing.module';

import { DataSuaraPage } from './data-suara.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DataSuaraPageRoutingModule
  ],
  declarations: [DataSuaraPage]
})
export class DataSuaraPageModule {}
