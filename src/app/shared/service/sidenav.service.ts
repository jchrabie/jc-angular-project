import { Injectable } from '@angular/core';
import { MatSidenav } from '@angular/material';

import { linkList, Link } from '../constants/linkList.constants';

const BASE_URL = '//localhost:4201/api';

@Injectable()
export class SidenavService {
  public opened = false;

  constructor(private sidenav: MatSidenav) { }

  toggle() {
    this.sidenav.toggle();
    this.opened = !this.opened;
  }

  getLinkList(): Link[] {
    return linkList;
  }
}
