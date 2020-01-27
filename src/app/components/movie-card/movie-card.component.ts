import {Component, Input, OnInit} from '@angular/core';
import {MovieModel} from '../../models/Movie.model';
import {Router} from '@angular/router';

@Component({
  selector: 'app-movie-card',
  templateUrl: './movie-card.component.html',
  styleUrls: ['./movie-card.component.scss'],
})
export class MovieCardComponent implements OnInit {
  @Input() movies: MovieModel[] = [];
  constructor(private router: Router) { }

  ngOnInit() {}
  goToMovie(movieId: number) {
    this.router.navigate(['/tabs/movie', movieId]);
    console.log(movieId);
  }
}
