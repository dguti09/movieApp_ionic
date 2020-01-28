import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { SearchTabPage } from './search-tab.page';
import {MovieCardModule} from '../../modules/movie-card/movie-card.module';


@NgModule({
    imports: [
        IonicModule,
        CommonModule,
        FormsModule,
        RouterModule.forChild([{path: '', component: SearchTabPage}]),
        MovieCardModule
    ],
    declarations: [SearchTabPage]
})
export class SearchTabModule {
}
