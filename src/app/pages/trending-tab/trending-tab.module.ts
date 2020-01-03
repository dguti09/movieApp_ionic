import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Tab4PageRoutingModule } from './trending-tab-routing.module';

import { TrendingTabPage } from './trending-tab.page';
import {Tab1PageModule} from "../search-tab/search-tab.module";

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        Tab4PageRoutingModule,
        Tab1PageModule
    ],
  declarations: [TrendingTabPage]
})
export class Tab4PageModule {}
