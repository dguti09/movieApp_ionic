import {Component} from '@angular/core';
import {MoviesMagnamentProvider} from '../../../providers/MoviesMagnament.provider';
import {MovieModel} from '../../models/Movie.model';

@Component({
    selector: 'app-tab1',
    templateUrl: 'search-tab.page.html',
    styleUrls: ['search-tab.page.scss']
})
export class SearchTabPage {

    movies: MovieModel[] = [];
    showProgress: boolean;

    constructor(private moviesProvider: MoviesMagnamentProvider) {
        // this.loadPage();
        this.showProgress = false;
    }

    searchMovie(keyword: string) {
        console.log(keyword.length)
        this.showProgress = true;
        if (keyword.length > 4) {
            this.moviesProvider.searchMovie(keyword).subscribe(
                (data) => {
                    const page = data['page'];
                    console.log('page ->' + page)
                    this.movies = data['movies'].map(x => Object.assign(new MovieModel(), x) );
                    this.showProgress = false;
                },
                (e) => {
                    console.log(e);
                }
            );
        } else {
          this.movies = [];
          this.showProgress = false;
        }
    }
}
