import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { SearchTabPage } from './search-tab.page';
import {ShowMovieComponentComponent} from '../../components/show-movie-component/show-movie-component.component';

@NgModule({
    imports: [
        IonicModule,
        CommonModule,
        FormsModule,
        RouterModule.forChild([{path: '', component: SearchTabPage}])
    ],
    exports: [
        ShowMovieComponentComponent
    ],
    declarations: [SearchTabPage, ShowMovieComponentComponent]
})
export class Tab1PageModule {}
