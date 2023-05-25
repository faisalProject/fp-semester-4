import { NgModule } from '@angular/core';
import { Routes, RouterModule, Router } from '@angular/router';

import { AppPage } from './app.page';

const routes: Routes = [
  {
    path:'',
    component: AppPage,
    children:
    [
      {
       path:'dashboard',
       children:[
        {
          path:'',
          loadChildren:()=> import('../dashboard/dashboard.module').then(m => m.DashboardPageModule)
        }
       ]
      },{
        path:'about',
        children:[
         {
           path:'',
           loadChildren:()=> import('../about/about.module').then(m => m.AboutPageModule)
         }
        ]
       }
    ] 
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})

export class AppPageRoutingModule {}
