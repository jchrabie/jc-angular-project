import { Component, OnInit } from '@angular/core';
import Typed from 'typed.js';

import { AnalyticsService } from '../shared/service/analytics.service';
import { AuthService } from '../shared/service/auth.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  constructor(
    private analyticsService: AnalyticsService,
    private authService: AuthService
  ) { }

  ngOnInit() {
    const options = {
      strings: ['Angular', 'Web', 'Front'],
      typeSpeed: 100,
      backSpeed: 100,
      showCursor: true,
      cursorChar: '|',
      loop: true
    };

    new Typed('.typing-element', options);
  }

  hireClick() {
    this.analyticsService.emit('click', 'home', 'hiring', 'Click');
  }

  login() {
    this.authService.loginWithGoogle().then((data) => {
      console.log(data);
    });
  }

  logout() {
    this.authService.logout().then((data) => {
      console.log(data);
    });
  }
}
