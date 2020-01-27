import {Component, OnInit} from '@angular/core';
import {MovieModel} from '../../models/Movie.model';
import {MoviesMagnamentProvider} from '../../../providers/MoviesMagnament.provider';
import {SeriesService} from '../../services/series.service';

@Component({
    selector: 'app-tab4',
    templateUrl: './trending-tab.page.html',
    styleUrls: ['./trending-tab.page.scss'],
})
export class TrendingTabPage implements OnInit {

    movies: MovieModel[] = [];

    constructor(private moviesProvider: MoviesMagnamentProvider) {
        this.getDay();
    }

    changeButton(item) {
        console.log('Select -> ', item.detail.value);
        this.movies = [];
        if (item.detail.value === '1') {
          this.getDay();
        } else if (item.detail.value === '2') {
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
                this.movies = data['movies'].map(x =>
                    Object.assign(new MovieModel(), x)
                );
            },
            (e) => {
                console.log(e);
            }
        );
    }

    ngOnInit() {
    }

}
