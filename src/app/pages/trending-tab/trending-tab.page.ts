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
    eventWeekOrDay = '1';
    showProgress: boolean;
    selectedColorDay: string;
    selectedColorWeek: string;

    constructor(private moviesProvider: MoviesMagnamentProvider, private seriesService: SeriesService) {
        this.tvIsEnable = seriesService.tvIsEnableService;
        this.getDay();
        this.selectedColorDay = 'white'
        this.selectedColorWeek = 'dark'
        this.seriesService.componentMethodCalled$.subscribe( () => {
                console.log('llamado desde el switch');
                this.showProgress = true;
                this.eventWeekOrDay === '1' ? this.getDay() : this.getWeek();
            }
        );
    }

    changeButton(event) {
        this.movies = [];
        this.showProgress = true;
        if (event.detail.value === '1') {
            this.eventWeekOrDay = '1';
            this.selectedColorDay = 'white'
            this.selectedColorWeek = 'dark'
            this.getDay();
        } else if (event.detail.value === '2') {
            this.eventWeekOrDay = '2';
            this.selectedColorDay = 'dark'
            this.selectedColorWeek = 'white'
            this.getWeek();
        }
    }

    getWeek() {
        this.moviesProvider.trendingWeek().subscribe(
            (data) => {
                this.movies = data['movies'].map(x =>
                  Object.assign(new MovieModel(), x)
                );
                this.showProgress = false;
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
                this.showProgress = false;
            },
            (e) => {
                console.log(e);
            }
        );
    }

    ngOnInit() {
    }

}
