import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Tab4PageRoutingModule } from './trending-tab-routing.module';

import { TrendingTabPage } from './trending-tab.page';
import {ShowMovieModuleModule} from '../../show-movie-module/show-movie-module.module';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        Tab4PageRoutingModule,
        ShowMovieModuleModule,
    ],
  declarations: [TrendingTabPage]
})
export class Tab4PageModule {}
