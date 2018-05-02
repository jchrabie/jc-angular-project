import { Injectable } from '@angular/core';

import { MatSidenav } from '@angular/material';

@Injectable()
export class SidenavService {
  public opened: boolean = false;

  constructor(private sidenav: MatSidenav) { }

  toggle() {
    this.sidenav.toggle();
    this.opened = !this.opened;
  }
}
