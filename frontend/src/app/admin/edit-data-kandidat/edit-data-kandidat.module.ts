import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EditDataKandidatPageRoutingModule } from './edit-data-kandidat-routing.module';

import { EditDataKandidatPage } from './edit-data-kandidat.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EditDataKandidatPageRoutingModule
  ],
  declarations: [EditDataKandidatPage]
})
export class EditDataKandidatPageModule {}
