import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Tab1Page } from './tab1.page';
import {ShowMovieComponentComponent} from '../../components/show-movie-component/show-movie-component.component';

@NgModule({
    imports: [
        IonicModule,
        CommonModule,
        FormsModule,
        RouterModule.forChild([{path: '', component: Tab1Page}])
    ],
    exports: [
        ShowMovieComponentComponent
    ],
    declarations: [Tab1Page, ShowMovieComponentComponent]
})
export class Tab1PageModule {}
