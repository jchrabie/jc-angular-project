import { Component, OnInit } from '@angular/core';
import { SidenavService } from '../service/sidenav.service';
import Link from '../../model/link';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss']
})
export class SidenavComponent implements OnInit {
  linkList: Link[];

  constructor(private sideNavService: SidenavService) { }

  ngOnInit() {
    this.sideNavService.getLinkList().subscribe(res => {
      this.linkList = res.map(link => <Link>link);
    });
  }

  getLinkList(): Link[] {
    return this.linkList;
  }
}
