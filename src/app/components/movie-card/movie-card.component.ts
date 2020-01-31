import {Component, Input, OnInit} from '@angular/core';
import {MovieModel} from '../../models/Movie.model';
import {Router} from '@angular/router';
import {SeriesService} from '../../services/series.service';

@Component({
  selector: 'app-movie-card',
  templateUrl: './movie-card.component.html',
  styleUrls: ['./movie-card.component.scss'],
})
export class MovieCardComponent implements OnInit {
  @Input() movies: MovieModel[] = [];
  constructor(private router: Router, private seriesService: SeriesService) { }

  ngOnInit() {}
  goToMovie(movieId: number, type: string) {
    console.log('type -> ' + type);
    if (type === 'movie') {
      this.router.navigate(['/tabs/movie' , movieId]);
    } else if (type === 'tv') {
      this.router.navigate(['/tabs/movie' , type + movieId]);
    } else {
      this.router.navigate(['/tabs/movie' , movieId]);
    }
    console.log(movieId);
  }
}
