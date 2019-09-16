import { Component, OnInit } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';

import { SidenavService } from '../shared/service/sidenav.service';
import { AnalyticsService } from '../shared/service/analytics.service';
import { Link } from '../shared/constants/linkList.constants';
import { saveAs } from 'file-saver';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss']
})
export class SidenavComponent implements OnInit {
  linkList: Link[];
  blog;
  constructor(
    private sideNavService: SidenavService,
    private analyticsService: AnalyticsService,
    private http: HttpClient
  ) { }

  ngOnInit() {
    this.linkList = this.sideNavService.getLinkList();
    this.blog = this.linkList.find(l => l.type === 'Blog');
  }

  linkClick(link: string): void {
    this.analyticsService.emit('SideNav', 'Links', 'link clicked', link);
    this.sideNavService.toggle();

    if (link === '/pdf') {
      const headers = new HttpHeaders().set('Accept', 'application/pdf');

      this.http.get('/assets/CV.pdf', { headers, responseType: 'blob' })
        .subscribe(blob => saveAs(blob, 'CV.pdf'));
    }
  }
}
