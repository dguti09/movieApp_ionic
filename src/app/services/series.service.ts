import { Injectable } from '@angular/core';
import {Subject} from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class SeriesService {
  tvIsEnableService: boolean;

  // Observable string sources
  private componentMethodCallSource = new Subject<any>();

  componentMethodCalled$ = this.componentMethodCallSource.asObservable();
  constructor() {
  }
  getTvIsEnableService(enableTv: boolean) {
    this.tvIsEnableService = enableTv
    console.log('tv en servicio -> ' + this.tvIsEnableService);
  }

  callComponentMethod() {
    this.componentMethodCallSource.next();
  }
}
