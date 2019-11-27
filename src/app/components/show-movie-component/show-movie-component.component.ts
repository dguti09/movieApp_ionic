import {Component, Input, OnInit} from '@angular/core';
import {MovieModel} from '../../models/Movie.model';

@Component({
  selector: 'app-show-movie-component',
  templateUrl: './show-movie-component.component.html',
  styleUrls: ['./show-movie-component.component.scss'],
})
export class ShowMovieComponentComponent implements OnInit {
  @Input() items: MovieModel[] = [];
  constructor() { }

  ngOnInit() {}

  goToMovie(movieId: number) {
    console.log(movieId);
  }

}
