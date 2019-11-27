import {Component} from '@angular/core';
import {MoviesMagnamentProvider} from '../../../providers/MoviesMagnament.provider';
import {MovieModel} from '../../models/Movie.model';

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

    searchMovie(keyword: string) {
        if (keyword.length !== 0) {
            this.moviesProvider.searchMovie(keyword).subscribe(
                (data) => {
                    this.movies = data['movies'];
                },
                (e) => {
                    console.log(e);
                }
            );
        } else {
          this.movies = null;
        }
    }
}
