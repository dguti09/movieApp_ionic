import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MoviePageRoutingModule } from './movie-routing.module';

import { MoviePage } from './movie.page';
import {IonicStorageModule} from '@ionic/storage';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    IonicStorageModule.forRoot(),
    MoviePageRoutingModule,
  ],
  declarations: [MoviePage]
})
export class MoviePageModule {}
