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
    selectedColorDay = 'white';
    selectedColorWeek = 'black';
    selectedDay = true;
    selectedWeek = false;
    private notifications = {
        value : 'day'
    };

    constructor(private moviesProvider: MoviesMagnamentProvider, private seriesService: SeriesService) {
        this.tvIsEnable = seriesService.tvIsEnableService;
        this.getDay();
        this.selectedColorDay = 'dark';
        this.selectedColorWeek = 'dark';
        this.seriesService.componentMethodCalled$.subscribe( () => {
                console.log('llamado desde el switch');
                this.showProgress = true;
                this.eventWeekOrDay === '1' ? this.getDay() : this.getWeek();
            }
        );
        this.notifications.value = 'day';
    }

    changeButton(event) {
        this.movies = [];
        this.showProgress = true;
        if (event.detail.value === '1') {
            console.log('1');
            this.selectedDay = true;
            this.selectedWeek = false;
            this.eventWeekOrDay = '1';
            this.selectedColorDay = 'black';
            this.selectedColorWeek = 'white';
            console.log(' day -> ' ,  this.selectedDay);
            console.log(' week -> ' ,  this.selectedWeek);
            this.getDay();
        } else if (event.detail.value === '2') {
            console.log('2');
            this.selectedDay = false;
            this.selectedWeek = true;
            console.log(' day -> ' ,  this.selectedDay);
            console.log(' week -> ' ,  this.selectedWeek);
            this.eventWeekOrDay = '2';
            this.selectedColorDay = 'white';
            this.selectedColorWeek = 'black';
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
