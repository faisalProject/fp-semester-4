import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DetailKandidatPage } from './detail-kandidat.page';

const routes: Routes = [
  {
    path: '',
    component: DetailKandidatPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DetailKandidatPageRoutingModule {}
