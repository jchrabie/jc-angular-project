import { Injectable } from '@angular/core';
import { NavigationEnd } from '@angular/router';
declare var ga: Function;

@Injectable()
export class AnalyticsService {

  constructor() { }

  setInitialInformations(event) {
    if (event instanceof NavigationEnd) {
      ga('set', 'page', event.urlAfterRedirects);
      ga('send', 'pageview');
    }
  }

  emit(...params) {
    ga('send', 'event', ...params);
  }
}
