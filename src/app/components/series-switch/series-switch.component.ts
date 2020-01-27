import { Component, OnInit } from '@angular/core';
import {SeriesService} from '../../services/series.service';

@Component({
  selector: 'app-series-switch',
  templateUrl: './series-switch.component.html',
  styleUrls: ['./series-switch.component.scss'],
})
export class SeriesSwitchComponent implements OnInit {
  tvIsEnabled: boolean
  item: string;
  constructor(private serviceSeries: SeriesService) {
    this.enableTvSeries();
  }

  ngOnInit() {}

  enableTvSeries() {
    console.log('click tv in -> ' + this.tvIsEnabled)
    this.serviceSeries.testService(this.tvIsEnabled);
  }
}
