import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CandidateDetailsPage } from './candidate-details.page';

const routes: Routes = [
  {
    path: '',
    component: CandidateDetailsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CandidateDetailsPageRoutingModule {}
