import { Injectable } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';

import { linkList, Link } from '../constants/linkList.constants';
import { AnalyticsService } from './analytics.service';

@Injectable()
export class SidenavService {
  public opened = false;

  constructor(
    private sidenav: MatSidenav,
    private analyticsService: AnalyticsService
  ) { }

  toggle() {
    this.sidenav.toggle();
    this.opened = !this.opened;
  }

  onOpenedChange(isOpened: boolean) {
    this.analyticsService.emit('click', 'sidenav', 'toggle', isOpened ? 'Opened' : 'Closed');
  }

  getLinkList(): Link[] {
    return linkList;
  }
}
