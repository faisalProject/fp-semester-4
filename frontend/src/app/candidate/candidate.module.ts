import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CandidatePageRoutingModule } from './candidate-routing.module';

import { CandidatePage } from './candidate.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CandidatePageRoutingModule
  ],
  declarations: [CandidatePage]
})
export class CandidatePageModule {}
