import {Component, Input, OnInit} from '@angular/core';
import {MovieModel} from '../../models/Movie.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-show-movie-component',
  templateUrl: './show-movie-component.component.html',
  styleUrls: ['./show-movie-component.component.scss'],
})
export class ShowMovieComponentComponent implements OnInit {
  @Input() items: MovieModel[] = [];
  constructor(private router: Router) { }

  ngOnInit() {}

  goToMovie(movieId: number) {
    this.router.navigate(['/tabs/movie', movieId])
    console.log(movieId);
  }

}
