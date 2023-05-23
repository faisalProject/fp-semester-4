import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EditDataKandidatPage } from './edit-data-kandidat.page';

const routes: Routes = [
  {
    path: '',
    component: EditDataKandidatPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EditDataKandidatPageRoutingModule {}
