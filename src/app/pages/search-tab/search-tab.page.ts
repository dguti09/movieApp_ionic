import {Component, Inject} from '@angular/core';
import {MoviesMagnamentProvider} from '../../../providers/MoviesMagnament.provider';
import {MovieModel} from '../../models/Movie.model';
import {NavigationEnd, Router} from '@angular/router';
import {filter} from 'rxjs/operators';
import { DOCUMENT } from '@angular/common';

@Component({
    selector: 'app-tab1',
    templateUrl: 'search-tab.page.html',
    styleUrls: ['search-tab.page.scss']
})
export class SearchTabPage {

    movies: MovieModel[] = [];
    showProgress: boolean;
    textSearch: string;

    constructor(private moviesProvider: MoviesMagnamentProvider, private router: Router, @Inject(DOCUMENT) document) {
        // this.loadPage();
        this.showProgress = false;
    }

    searchMovie(keyword: string) {
        // validate switch
        console.log(keyword.length)
        this.showProgress = true;
        if (keyword.length === 0) {
            return;
        }
        if (keyword.length > 0) {
            this.textSearch = keyword;
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

    getData() {
        console.log('texto! -> ' + this.textSearch);
        return this.textSearch;
    }
}
