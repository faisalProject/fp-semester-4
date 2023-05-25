import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DetailAkunPage } from './detail-akun.page';

const routes: Routes = [
  {
    path: '',
    component: DetailAkunPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DetailAkunPageRoutingModule {}
