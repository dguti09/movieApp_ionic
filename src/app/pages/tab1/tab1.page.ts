import {Component} from '@angular/core';
import {MoviesMagnamentProvider} from '../../../providers/MoviesMagnament.provider';

@Component({
    selector: 'app-tab1',
    templateUrl: 'tab1.page.html',
    styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

    movies: any;

    constructor(private moviesProvider: MoviesMagnamentProvider) {
        this.loadPage();
    }

    loadPage() {
        this.moviesProvider.trendingWeek().subscribe(
            (data) => {
                this.movies = data;
            },
            (e) => {
                console.log(e);
            }
        );
    }
}
