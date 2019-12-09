import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Params} from '@angular/router';
import {MoviesMagnamentProvider} from '../../../providers/MoviesMagnament.provider';
import {MovieModel} from '../../models/Movie.model';


@Component({
    selector: 'app-movie',
    templateUrl: './movie.page.html',
    styleUrls: ['./movie.page.scss'],
})
export class MoviePage implements OnInit {

    movie: any = [];

    constructor(private router: ActivatedRoute, private moviesProvider: MoviesMagnamentProvider) {

        this.router.params.subscribe( idMovie => {
            // console.log(idMovie);
             this.getMovie(idMovie.id);
        });

    }

    private  getMovie(idMovie: string) {
       this.moviesProvider.getMovieById(idMovie).subscribe( (data) => {
        // console.log('data -> ' + JSON.stringify(data));
        const movieObj: MovieModel = new MovieModel();
        this.movie = data;
        console.log('movie -> ' + JSON.stringify(this.movie));
      });
    }

    ngOnInit() {
    }


}
