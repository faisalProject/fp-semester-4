import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';


import { AppPage } from './app/app.page';
import { TabsPage } from './admin/tabs/tabs.page';
import { LocalStorageService } from '../app/service/local-storage.service';

 
db:LocalStorageService;
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
        path: `candidate-details/:id` ,
        loadChildren:() => import('../app/candidate-details/candidate-details.module').then(m => m.CandidateDetailsPageModule)
      }
    ]
  },
  {
    path:'',
    component: TabsPage,
    children:[
      {
        path: 'tambah-kandidat/:id',
        loadChildren: () => import('./admin/tambah-kandidat/tambah-kandidat.module').then( m => m.TambahKandidatPageModule)
      },
      {
        path: 'tambah-data-siswa',
        loadChildren: () => import('./admin/tambah-data-siswa/tambah-data-siswa.module').then( m => m.TambahDataSiswaPageModule)
      },
      {
        path: 'daftar-akun',
        loadChildren: () => import('./admin/daftar-akun/daftar-akun.module').then( m => m.DaftarAkunPageModule)
      },
      {
        path: 'data-suara',
        loadChildren: () => import('./admin/data-suara/data-suara.module').then( m => m.DataSuaraPageModule)
      },
      {
        path: 'daftar-siswa',
        loadChildren: () => import('./admin/daftar-siswa/daftar-siswa.module').then( m => m.DaftarSiswaPageModule)
      },
      {
        path: 'detail-data/:id',
        loadChildren: () => import('./admin/detail-data/detail-data.module').then( m => m.DetailDataPageModule)
      },
      {
        path: 'daftar-kandidat',
        loadChildren: () => import('./admin/daftar-kandidat/daftar-kandidat.module').then( m => m.DaftarKandidatPageModule)
      },
      {
        path: 'detail-akun/:id',
        loadChildren: () => import('./admin/detail-akun/detail-akun.module').then( m => m.DetailAkunPageModule)
      },
      {
        path: 'edit-data-kandidat/:id',
        loadChildren: () => import('./admin/edit-data-kandidat/edit-data-kandidat.module').then( m => m.EditDataKandidatPageModule)
      },
      {
        path: 'edit-data-siswa/:id',
        loadChildren: () => import('./admin/edit-data-siswa/edit-data-siswa.module').then( m => m.EditDataSiswaPageModule)
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
  {
    path: 'tabs',
    loadChildren: () => import('./admin/tabs/tabs.module').then( m => m.TabsPageModule)
  },
  
  {
    path: 'detail-kandidat',
    loadChildren: () => import('./admin/detail-kandidat/detail-kandidat.module').then( m => m.DetailKandidatPageModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
