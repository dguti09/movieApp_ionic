import {Component, Inject} from '@angular/core';
import {MoviesMagnamentProvider} from '../../../providers/MoviesMagnament.provider';
import {MovieModel} from '../../models/Movie.model';
import {SeriesService} from '../../services/series.service';

@Component({
    selector: 'app-tab1',
    templateUrl: 'search-tab.page.html',
    styleUrls: ['search-tab.page.scss']
})
export class SearchTabPage {

    movies: MovieModel[] = [];
    showProgress: boolean;
    textSearch: string;

    constructor(private moviesProvider: MoviesMagnamentProvider, private seriesService: SeriesService) {
        // this.loadPage();
        this.seriesService.componentMethodCalled$.subscribe(() => {
                console.log('llamado desde el switch 2 ');
                this.searchMovie(this.textSearch);
            }
        );
    }

    searchMovie(keyword: string) {
        // validate switch
        if (keyword) {
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
            }
        }

    }

    getData() {
        console.log('texto! -> ' + this.textSearch);
        return this.textSearch;
    }
}
