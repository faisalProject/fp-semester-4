import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DetailDataPage } from './detail-data.page';

const routes: Routes = [
  {
    path: '',
    component: DetailDataPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DetailDataPageRoutingModule {}
