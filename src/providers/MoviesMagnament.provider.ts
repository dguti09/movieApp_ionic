import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
    providedIn: 'root'
})
export class MoviesMagnamentProvider {
    constructor(private http: HttpClient) {
    }

    makeRequest(query: string) {
        const url = `https://api-gateway-dot-movieapp-microservices.appspot.com/movie/${query}`;
        return this.http.get(url);
    }

    getMovieById(idMovie: string) {
        return this.makeRequest(idMovie);
    }

    trendingWeek() {
        return this.makeRequest('trending/week');
    }

    trendingDay() {
        return this.makeRequest('trending/day');
    }

    searchMovie(text: string) {
        return this.makeRequest(`search/?text=${text}`);
    }
}
