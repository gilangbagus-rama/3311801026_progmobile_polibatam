import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },

  // Mendefinisikan Halaman Akun
  {
    path: 'akun',
    loadChildren: () => import('./akun/akun.module').then( m => m.AkunPageModule)
  },
  
  // Mendefinisikan Halaman Login
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule)
  },

  // Mendefinisikan Tab 1
  {
    path: 'tab1',
    loadChildren: () => import('./tab1/tab1.module').then(m => m.Tab1PageModule)
  },

  // Mendefinisikan Tab 2
  {
    path: 'tab2',
    loadChildren: () => import('./tab2/tab2.module').then(m => m.Tab2PageModule)
  },

  // Mendefinisikan Tab 3
  {
    path: 'tab3',
    loadChildren: () => import('./tab3/tab3.module').then( m => m.Tab3PageModule)
  },

  // Mendefinisikan Tab 4
  {
    path: 'tab4',
    loadChildren: () => import('./tab4/tab4.module').then( m => m.Tab4PageModule)
  },


  {
    path: '',
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
  },
  {
    path: 'tab4',
    loadChildren: () => import('./tab4/tab4.module').then( m => m.Tab4PageModule)
  },
  {
    path: 'tema',
    loadChildren: () => import('./tema/tema.module').then( m => m.TemaPageModule)
  },
  {
    path: 'bahasa',
    loadChildren: () => import('./bahasa/bahasa.module').then( m => m.BahasaPageModule)
  },
  {
    path: 'history',
    loadChildren: () => import('./history/history.module').then( m => m.HistoryPageModule)
  },
  {
    path: 'pembelian',
    loadChildren: () => import('./pembelian/pembelian.module').then( m => m.PembelianPageModule)
  },
  {
    path: 'buat-akun',
    loadChildren: () => import('./buat-akun/buat-akun.module').then( m => m.BuatAkunPageModule)
  },
  {
    path: 'fblogin',
    loadChildren: () => import('./fb/fblogin/fblogin.module').then( m => m.FbloginPageModule)
  },
  {
    path: 'fbok',
    loadChildren: () => import('./fb/fbok/fbok.module').then( m => m.FbokPageModule)
  },
  {
    path: 'konfirmasi-akun',
    loadChildren: () => import('./konfirmasi-akun/konfirmasi-akun.module').then( m => m.KonfirmasiAkunPageModule)
  },
   
  ];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
