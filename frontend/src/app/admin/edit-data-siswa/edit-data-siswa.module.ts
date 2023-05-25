import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EditDataSiswaPageRoutingModule } from './edit-data-siswa-routing.module';

import { EditDataSiswaPage } from './edit-data-siswa.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EditDataSiswaPageRoutingModule
  ],
  declarations: [EditDataSiswaPage]
})
export class EditDataSiswaPageModule {}
