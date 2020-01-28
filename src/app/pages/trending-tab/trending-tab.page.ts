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
    tvIsEnable: boolean;

    constructor(private moviesProvider: MoviesMagnamentProvider, private seriesService: SeriesService) {
        this.tvIsEnable = seriesService.tvIsEnableService;
        this.getDay();
        this.seriesService.componentMethodCalled$.subscribe( () => {
                console.log('llamado desde el switch')
                this.getDay();
            }
        );
    }

    changeButton(event) {
        this.movies = [];
        if (event.detail.value === '1') {
          this.getDay();
        } else if (event.detail.value === '2') {
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
