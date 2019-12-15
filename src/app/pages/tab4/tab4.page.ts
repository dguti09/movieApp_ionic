import {Component, OnInit} from '@angular/core';
import {MovieModel} from '../../models/Movie.model';
import {MoviesMagnamentProvider} from '../../../providers/MoviesMagnament.provider';

@Component({
    selector: 'app-tab4',
    templateUrl: './tab4.page.html',
    styleUrls: ['./tab4.page.scss'],
})
export class Tab4Page implements OnInit {

    movies: MovieModel[];

    constructor(private moviesProvider: MoviesMagnamentProvider) {
        this.getDay();
    }

    changeButton(item) {
        console.log('cambia', item.detail.value);
        if (item.detail.value === '1') {
          this.getDay();
        } else {
          this.getWeek();
        }
    }

    getWeek() {
        this.moviesProvider.trendingWeek().subscribe(
            (data) => {
                this.movies = data['movies'].map(x =>
                  Object.assign(new MovieModel(), x)
                );
            },
            (e) => {
                console.log(e);
            }
        );
    }

    getDay() {
        this.moviesProvider.trendingDay().subscribe(
            (data) => {
                // this.movies = data['movies'];
                // console.log(this.movies);
                this.movies = data['movies'].map(x => Object.assign(new MovieModel(), x) );
            },
            (e) => {
                console.log(e);
            }
        );
    }

    ngOnInit() {
    }

}
