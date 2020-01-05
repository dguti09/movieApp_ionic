import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ToSeeTabPage } from './to-see-tab-page.component';
import {ShowMovieModuleModule} from '../../show-movie-module/show-movie-module.module';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    RouterModule.forChild([{path: '', component: ToSeeTabPage}]),
    ShowMovieModuleModule
  ],
  declarations: [ToSeeTabPage]
})
export class Tab2PageModule {}
