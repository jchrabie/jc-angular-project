import { Injectable } from '@angular/core';

import { MatSidenav } from '@angular/material';
import { Observable } from 'rxjs/Observable';
import { HttpClient } from '@angular/common/http';

const BASE_URL = 'http://localhost:4201/api';

@Injectable()
export class SidenavService {
  public opened = false;

  constructor(private sidenav: MatSidenav, private http: HttpClient) { }

  toggle() {
    this.sidenav.toggle();
    this.opened = !this.opened;
  }

  getLinkList(): Observable<any> {
    return this.http.get(`${BASE_URL}/linkList`);
  }
}
