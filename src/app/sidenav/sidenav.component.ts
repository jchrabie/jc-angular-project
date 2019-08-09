import { Component, OnInit } from '@angular/core';
import { SidenavService } from '../shared/service/sidenav.service';
import { AnalyticsService } from '../shared/service/analytics.service';
import Link from '../../model/link';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss']
})
export class SidenavComponent implements OnInit {
  linkList: Link[];

  constructor(
    private sideNavService: SidenavService,
    private analyticsService: AnalyticsService
  ) { }

  ngOnInit() {
    this.sideNavService.getLinkList().subscribe(res => {
      this.linkList = res.map(link => <Link>link);
    });
  }

  linkClick(link: string): void {
    this.analyticsService.emit('SideNav', 'Links', 'link clicked', link);
    this.sideNavService.toggle();
  }
}
