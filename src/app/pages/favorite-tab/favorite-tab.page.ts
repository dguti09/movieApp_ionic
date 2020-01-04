import {Component, OnInit} from '@angular/core';
import {MovieModel} from '../../models/Movie.model';
import {UsersManagementProvider} from '../../../providers/users-managament-provider.service';
import {Storage} from '@ionic/storage';
import {NavigationEnd, Router} from '@angular/router';

@Component({
  selector: 'app-tab3',
  templateUrl: 'favorite-tab.page.html',
  styleUrls: ['favorite-tab.page.scss']
})
export class FavoriteTabPage implements OnInit {
  movies: MovieModel[];
  constructor(private userProvider: UsersManagementProvider, private storage: Storage, private router : Router) {
  }

  ngOnInit(): void {

      // subscribe events router
      this.router.events.subscribe(events => {
          // Several routing events, take only the last one
          if (events instanceof NavigationEnd || events.constructor.name === NavigationEnd.name) {
              console.log('navigation end');
              this.doOnInit();
          }
      });
  }

  private async getFavorites() {

    const userId = await this.storage.get('userId');
    this.userProvider.getFavorites(userId).subscribe(
        (data) => {
          this.movies = data['movies'].map(x =>
              Object.assign(new MovieModel(), x)
          );
          console.log(this.movies);
        },
        (e) => {
          console.log(e);
        }
    );
  }

    private doOnInit() {
        this.getFavorites()
            .then(r => console.log('favoritas cargadas'))
            .catch(reason => console.log(reason));
    }
}


