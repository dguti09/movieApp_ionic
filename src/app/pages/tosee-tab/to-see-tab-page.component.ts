import {Component, OnInit} from '@angular/core';
import {MovieModel} from '../../models/Movie.model';
import {UsersManagementProvider} from '../../../providers/users-managament-provider.service';
import {Storage} from '@ionic/storage';
import {NavigationEnd, Router} from '@angular/router';

@Component({
  selector: 'app-tab2',
  templateUrl: 'to-see-tab-page.component.html',
  styleUrls: ['to-see-tab-page.component.scss']
})
export class ToSeeTabPage implements OnInit {

  movies: MovieModel[] = [];
  constructor(private userProvider: UsersManagementProvider, private storage: Storage, private router: Router) {
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

  private async getToSee() {

    const userId = await this.storage.get('userId');
    this.userProvider.getToSee(userId).subscribe(
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
    this.getToSee()
        .then(r => console.log('to see cargadas'))
        .catch(reason => console.log(reason));
  }
}
