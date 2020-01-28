import { Component } from '@angular/core';
import {SeriesService} from '../../services/series.service';

@Component({
  selector: 'app-tabs',
  templateUrl: 'tabs.page.html',
  styleUrls: ['tabs.page.scss']
})
export class TabsPage {
  tvIsEnable: boolean;
  constructor(private seriesService: SeriesService) {}

  changeTab() {
    this.tvIsEnable = this.seriesService.tvIsEnableService;
    console.log('prueba tab 1 , service tv enable?  -> ' + this.tvIsEnable);
  }
}
