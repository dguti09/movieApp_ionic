import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MovieCardComponent} from '../../components/movie-card/movie-card.component';
import {IonicModule} from '@ionic/angular';
import {SeriesSwitchComponent} from '../../components/series-switch/series-switch.component';
import {FormsModule} from '@angular/forms';




@NgModule({
  declarations: [MovieCardComponent, SeriesSwitchComponent],
  exports: [
    MovieCardComponent,
    SeriesSwitchComponent
  ],
  imports: [
    CommonModule,
    IonicModule,
    FormsModule
  ]
})
export class MovieCardModule { }
