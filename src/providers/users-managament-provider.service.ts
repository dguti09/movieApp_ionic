import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
    providedIn: 'root'
})

export class UsersManagementProvider {

    urlBase = 'https://api-gateway-dot-movieapp-microservices.appspot.com/';

    constructor(private http: HttpClient) {}

    getRequest(query: string) {
        const url = `${this.urlBase}${query}`;
        return this.http.get(url);
    }

    postRequest(query: string, body?) {
        const url = `${this.urlBase + query}`;
        return this.http.post(url, body);
    }

    createNewUser() {
        return this.postRequest('user');
    }

    addMovieToFavorite(idUser: string, idMovie: number ) {
        if (idUser && idMovie) {
            const body = {
                idUser,
                idMovie
            };
            console.log(`requesty body -> ${JSON.stringify(body)}`);
            return this.postRequest('movie/favorite', body);
        }
    }

    addMovieToSee(idUser: string, idMovie: number) {
        if (idUser && idMovie) {
            const body = { idUser, idMovie };
            console.log(`requesty body -> ${JSON.stringify(body)}`);
            return this.postRequest('movie/toSee', body);
        }
    }

    getToSee(idUser: string) {
        return this.getRequest(`user/movies/toSee/${idUser}`);
    }

    getFavorites(idUser: string) {
        return this.getRequest(`user/movies/favorite/${idUser}`);
    }



}
