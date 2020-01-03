import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./pages/tabs/tabs.module').then(m => m.TabsPageModule)
  },
  // {
  //   path: 'movie',
  //   loadChildren: () => import('./pages/movie/movie.module').then( m => m.MoviePageModule)
  // }
  /*,
  {
    path: 'trending-tab',
    loadChildren: () => import('./trending-tab/trending-tab.module').then( m => m.Tab4PageModule)
  }*/
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
