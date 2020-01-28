import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ToSeeTabPage } from './to-see-tab-page.component';
import {MovieCardModule} from '../../modules/movie-card/movie-card.module';


@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    RouterModule.forChild([{path: '', component: ToSeeTabPage}]),
    MovieCardModule,
  ],
  declarations: [ToSeeTabPage]
})
export class ToSeeModule {}
