import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TambahKandidatPage } from './tambah-kandidat.page';

const routes: Routes = [
  {
    path: '',
    component: TambahKandidatPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TambahKandidatPageRoutingModule {}
