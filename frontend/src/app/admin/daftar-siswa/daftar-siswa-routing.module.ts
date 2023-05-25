import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DaftarSiswaPage } from './daftar-siswa.page';

const routes: Routes = [
  {
    path: '',
    component: DaftarSiswaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DaftarSiswaPageRoutingModule {}
