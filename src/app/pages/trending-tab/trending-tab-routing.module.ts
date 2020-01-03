import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TrendingTabPage } from './trending-tab.page';

const routes: Routes = [
  {
    path: '',
    component: TrendingTabPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Tab4PageRoutingModule {}
