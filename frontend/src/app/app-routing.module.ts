import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

import { AppModule } from './app.module';
import { AppPage } from './app/app.page';
// import { TabsComponent } from './tabs-component';


const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'register',
    loadChildren: () => import('./register/register.module').then( m => m.RegisterPageModule)
  },
  {
    path:'',
    component: AppPage,
    children:[
      {
        path: 'dashboard',
        loadChildren: () => import('./dashboard/dashboard.module').then( m => m.DashboardPageModule)
      },
      {
        path: 'about',
        loadChildren: () => import('./about/about.module').then( m => m.AboutPageModule)
      },
      {
        path: 'candidate',
        loadChildren:() => import('../app/candidate/candidate.module').then(m => m.CandidatePageModule)
      },
      {
        path: 'candidate-details',
        loadChildren:() => import('../app/candidate-details/candidate-details.module').then(m => m.CandidateDetailsPageModule)
      }
    ]
  },
  {
    path: 'app',
    loadChildren: () => import('./app/app.module').then( m => m.AppPageModule)
  },
  {
    path: 'candidate-details',
    loadChildren: () => import('./candidate-details/candidate-details.module').then( m => m.CandidateDetailsPageModule)
  },
  {
    path: 'candidate',
    loadChildren: () => import('./candidate/candidate.module').then( m => m.CandidatePageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
