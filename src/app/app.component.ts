import { Component } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';

import { AnalyticsService } from './service/analytics.service';
import 'hammerjs';
import { SidenavService } from './service/sidenav.service';
import { MatSidenav } from '@angular/material';
import { TranslateService } from '@ngx-translate/core';
import { interval } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: [ SidenavService, MatSidenav ]
})
export class AppComponent {
  title = 'app';
  param = { value: 'world' };

  constructor(
    private router: Router,
    public analyticsService: AnalyticsService,
    public sidenavService: SidenavService,
    private translate: TranslateService
  ) {
    // this language will be used as a fallback when a translation isn't found in the current language
    translate.setDefaultLang('fr');

    // the lang to use, if the lang isn't available, it will use the current loader to get them
    translate.use('fr');

    this.router.events.subscribe(event => {
      analyticsService.setInitialInformations(event);
    });
 }
}
