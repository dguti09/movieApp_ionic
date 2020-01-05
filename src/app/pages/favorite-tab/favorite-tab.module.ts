import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { FavoriteTabPage } from './favorite-tab.page';
import {ShowMovieModuleModule} from '../../show-movie-module/show-movie-module.module';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    RouterModule.forChild([{path: '', component: FavoriteTabPage}]),
    ShowMovieModuleModule,
  ],
  declarations: [FavoriteTabPage]
})


export class Tab3PageModule {}
