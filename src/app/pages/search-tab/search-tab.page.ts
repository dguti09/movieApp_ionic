import {Component} from '@angular/core';
import {MoviesMagnamentProvider} from '../../../providers/MoviesMagnament.provider';
import {MovieModel} from '../../models/Movie.model';

@Component({
    selector: 'app-tab1',
    templateUrl: 'search-tab.page.html',
    styleUrls: ['search-tab.page.scss']
})
export class SearchTabPage {

    movies: MovieModel[];

    constructor(private moviesProvider: MoviesMagnamentProvider) {
        // this.loadPage();
    }

    searchMovie(keyword: string) {
        console.log(keyword.length)
        if (keyword.length > 4) {
            this.moviesProvider.searchMovie(keyword).subscribe(
                (data) => {
                    const page = data['page'];
                    console.log('page ->' + page)
                    this.movies = data['movies'].map(x => Object.assign(new MovieModel(), x) );
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
