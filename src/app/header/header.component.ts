import { Component, OnInit } from '@angular/core';
import { SidenavService } from '../service/sidenav.service';
import { MatSidenav } from '@angular/material';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(public sidenavService: SidenavService) { }

  ngOnInit() {
  }

}
