import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TambahDataSiswaPage } from './tambah-data-siswa.page';

const routes: Routes = [
  {
    path: '',
    component: TambahDataSiswaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TambahDataSiswaPageRoutingModule {}
