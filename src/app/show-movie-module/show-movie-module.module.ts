import { NgModule } from '@angular/core';
import {ShowMovieComponentComponent} from './show-movie-component/show-movie-component.component';
import {IonicModule} from '@ionic/angular';
import {CommonModule} from '@angular/common';

@NgModule({
  declarations: [ShowMovieComponentComponent],
  exports: [ShowMovieComponentComponent],
  imports: [
    IonicModule,
    CommonModule
  ]
})
export class ShowMovieModuleModule { }
