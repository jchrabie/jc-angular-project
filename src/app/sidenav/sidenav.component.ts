import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpHeaders, HttpClient } from '@angular/common/http';

import { SidenavService } from '../shared/service/sidenav.service';
import { AnalyticsService } from '../shared/service/analytics.service';
import { Link } from '../shared/constants/linkList.constants';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss']
})
export class SidenavComponent implements OnInit {
  linkList: Link[];

  constructor(
    private sideNavService: SidenavService,
    private analyticsService: AnalyticsService,
    private router: Router,
    private http: HttpClient
  ) { }

  ngOnInit() {
    this.linkList = this.sideNavService.getLinkList();
  }

  linkClick(link: string): any {
    this.analyticsService.emit('SideNav', 'Links', 'link clicked', link);
    this.sideNavService.toggle();
    if (link === '/pdf') {
      const headers = new HttpHeaders().set('Accept', 'application/pdf');
      return this.http.get('assets/CV.pdf', { headers: headers, responseType: 'blob' });
    }
    this.router.navigate([link]);
  }
}
