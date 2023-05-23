import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DataSuaraPage } from './data-suara.page';

const routes: Routes = [
  {
    path: '',
    component: DataSuaraPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DataSuaraPageRoutingModule {}
