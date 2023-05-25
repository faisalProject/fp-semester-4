import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EditDataSiswaPage } from './edit-data-siswa.page';

const routes: Routes = [
  {
    path: '',
    component: EditDataSiswaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EditDataSiswaPageRoutingModule {}
