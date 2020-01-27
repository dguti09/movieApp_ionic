import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MovieCardComponent} from '../../components/movie-card/movie-card.component';
import {IonicModule} from '@ionic/angular';




@NgModule({
  declarations: [MovieCardComponent],
  exports: [
    MovieCardComponent
  ],
  imports: [
    CommonModule,
    IonicModule
  ]
})
export class MovieCardModule { }
