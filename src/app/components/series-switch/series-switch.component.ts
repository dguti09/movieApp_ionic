import {Component, Input, OnInit} from '@angular/core';
import {SeriesService} from '../../services/series.service';
import {Router } from '@angular/router';

@Component({
  selector: 'app-series-switch',
  templateUrl: './series-switch.component.html',
  styleUrls: ['./series-switch.component.scss'],
})
export class SeriesSwitchComponent implements OnInit {
  @Input() tvIsEnabled: boolean
  private router: Router;
  constructor(private serviceSeries: SeriesService) {

    this.enableTvSeries();
  }

  ngOnInit() {}

  isEnableTv() {
    return this.serviceSeries.tvIsEnableService;
  }
  enableTvSeries() {
    if (this.tvIsEnabled === undefined) {
      this.tvIsEnabled = false;
    }

    console.log('click swicth -> ' + this.tvIsEnabled)
    this.serviceSeries.getTvIsEnableService(this.tvIsEnabled);
    this.serviceSeries.callComponentMethod();
/*      {
        router.events.pipe(
            filter(event => event instanceof NavigationEnd)
        ).subscribe((event: NavigationEnd) => {
          if (event.url === '/tabs/search-tab') {
            console.log('router swicth -> ' + event.url);
            router.navigate(['/tabs/search-tab']);
          }
        });
      }*/

  }
}
