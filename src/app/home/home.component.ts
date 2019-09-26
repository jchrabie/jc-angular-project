import { Component, OnInit } from '@angular/core';
import Typed from 'typed.js';

import { AnalyticsService } from '../shared/service/analytics.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  constructor(
    private analyticsService: AnalyticsService,
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
}
