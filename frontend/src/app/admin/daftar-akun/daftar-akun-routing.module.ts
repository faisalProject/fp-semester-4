import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DaftarAkunPage } from './daftar-akun.page';

const routes: Routes = [
  {
    path: '',
    component: DaftarAkunPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DaftarAkunPageRoutingModule {}
