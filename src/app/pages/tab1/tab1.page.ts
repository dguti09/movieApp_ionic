import {Component} from '@angular/core';
import {MoviesMagnamentProvider} from '../../../providers/MoviesMagnament.provider';
import {MovieModel} from "../../models/Movie.model";

@Component({
    selector: 'app-tab1',
    templateUrl: 'tab1.page.html',
    styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

    movies: MovieModel[];

    constructor(private moviesProvider: MoviesMagnamentProvider) {
        // this.loadPage();
    }

    getWeek() {
        this.moviesProvider.trendingWeek().subscribe(
            (data) => {
                this.movies = data.movies;
                console.log(this.movies);
            },
            (e) => {
                console.log(e);
            }
        );
    }

    getDay() {
        this.moviesProvider.trendingDay().subscribe(
            (data) => {
                this.movies = data.movies;
                console.log(this.movies);
            },
            (e) => {
                console.log(e);
            }
        );
    }
}
