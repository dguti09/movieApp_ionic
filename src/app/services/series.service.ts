import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SeriesService {
  tvIsEnableService: boolean;
  constructor() {
  }
  testService(enableTv: boolean) {
    this.tvIsEnableService = enableTv
    console.log('tv en servicio -> ' + this.tvIsEnableService);
  }
}
