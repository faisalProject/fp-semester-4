import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DaftarKandidatPage } from './daftar-kandidat.page';

const routes: Routes = [
  {
    path: '',
    component: DaftarKandidatPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DaftarKandidatPageRoutingModule {}
