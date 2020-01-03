import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { FavoriteTabPage } from './favorite-tab.page';
import {Tab1PageModule} from '../search-tab/search-tab.module';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    RouterModule.forChild([{path: '', component: FavoriteTabPage}]),
    Tab1PageModule,
  ],
  declarations: [FavoriteTabPage]
})
export class Tab3PageModule {}
