import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { FavoriteTabPage } from './favorite-tab.page';
import {MovieCardModule} from '../../modules/movie-card/movie-card.module';


@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    RouterModule.forChild([{path: '', component: FavoriteTabPage}]),
    MovieCardModule,
  ],
  declarations: [FavoriteTabPage]
})


export class Tab3PageModule {}
