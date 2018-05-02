import { Component } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';

import { AnalyticsService } from './service/analytics.service';
import 'hammerjs';
import { SidenavService } from './service/sidenav.service';
import { MatSidenav } from '@angular/material';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: [ SidenavService, MatSidenav ]
})
export class AppComponent {
  title = 'app';

  constructor(
    private router: Router, 
    public analyticsService: AnalyticsService,
    public sidenavService: SidenavService
  ) {
    this.router.events.subscribe(event => {
      analyticsService.setInitialInformations(event);
   });
 }
}
