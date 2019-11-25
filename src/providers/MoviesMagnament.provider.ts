import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
    providedIn: 'root'
})
export class MoviesMagnamentProvider {
    constructor(private http: HttpClient) {
    }

    makeRequest(query: string) {
        const url = `https://movieapp-microservices.appspot.com/movies/${query}`;
        console.log(url);
        // const url = `https://randomuser.me/api/?results=25`;
        // const url = `https://movieapp-microservices.appspot.com/movies/search/?text=batman`;
        return this.http.get(url);
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
