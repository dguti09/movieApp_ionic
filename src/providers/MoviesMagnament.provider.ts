import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {SeriesService} from '../app/services/series.service';

@Injectable({
    providedIn: 'root'
})
export class MoviesMagnamentProvider {
    getTvs: boolean
    constructor(private http: HttpClient, private serviceSeries: SeriesService) {
        this.getTvs = false;
    }

    makeRequest(query: string, type: string) {
        const url = `https://api-gateway-dot-movieapp-microservices.appspot.com/${type}/${query}`;
        return this.http.get(url);
    }

    getMovieById(idMovie: string, type?: string) {
        console.log('tipo a traer-> ' + type);
        this.getTvs = this.serviceSeries.tvIsEnableService
        if (type && type === 'tv') {
            this.getTvs = true;
        }
        if (this.getTvs) {
            return this.makeRequest(idMovie, 'tv');
        }
        return this.makeRequest(idMovie, 'movie');
    }

    trendingWeek() {
        this.getTvs = this.serviceSeries.tvIsEnableService
        console.log(' get tvs? -> ' + this.getTvs )
        if (this.getTvs) {
            return this.makeRequest('trending/week', 'tv');
        }
        return this.makeRequest('trending/week', 'movie');
    }

    trendingDay() {
        this.getTvs = this.serviceSeries.tvIsEnableService
        if (this.getTvs) {
            return this.makeRequest('trending/day', 'tv');
        }
        return this.makeRequest('trending/day', 'movie');
    }

    searchMovie(text: string) {
        this.getTvs = this.serviceSeries.tvIsEnableService
        console.log('this.getTvs fro  search -> ? ' + this.getTvs)
        if (this.getTvs) {
            return this.makeRequest(`search/?text=${text}`, 'tv');
        }
        return this.makeRequest(`search/?text=${text}`, 'movie');
    }
}
