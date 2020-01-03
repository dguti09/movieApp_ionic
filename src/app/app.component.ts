import { Component } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import {UsersManagementProvider} from '../providers/users-managament-provider.service';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent {
  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private usersProvider: UsersManagementProvider,
    private storage: Storage
  ) {
    this.initializeApp();
    this.createUser(storage);
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  private async createUser(storage: Storage) {

    let userId = await storage.get('userId');
    console.log(`userId -> ${ userId }`);
    if (!userId) {
      console.log('entre');
      await this.usersProvider.createNewUser().subscribe(response => {
        console.log(`data user create -> ${JSON.stringify(response)}`);
        if (response) {
          userId = response['userId'];
          storage.set('userId', userId);
        }
      });
    }
  }
}
