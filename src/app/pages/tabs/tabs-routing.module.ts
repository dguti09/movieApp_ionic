import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: 'tabs',
    component: TabsPage,
    children: [
      {
        path: 'search-tab',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('../search-tab/search-tab.module').then(m => m.SearchTabModule)
          }
        ]
      },
      {
        path: 'tosee-tab',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('../tosee-tab/tosee-tab.module').then(m => m.ToSeeModule)
          }
        ]
      },
      {
        path: 'favorite-tab',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('../favorite-tab/favorite-tab.module').then(m => m.FavoriteTabModule)
          }
        ]
      },
      {
        path: 'trending-tab',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('../trending-tab/trending-tab.module').then(m => m.TrendingTabModule)
          }
        ]
      },
      {
        path: 'movie/:id',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('../movie/movie.module').then(m => m.MoviePageModule)
          }
        ]
      },
      {
        path: '',
        redirectTo: '/tabs/search-tab',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '',
    redirectTo: '/tabs/trending-tab',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class TabsPageRoutingModule {
}
