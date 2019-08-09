import { Component, OnInit } from '@angular/core';
import { AnalyticsService } from '../shared/service/analytics.service';
import Card from '../../model/Card';
import { RestService } from '../shared/service/rest.service';
import * as Typed from 'typed.js';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  private _cards: Card[] = [];

  constructor(
    public analyticsService: AnalyticsService,
    public restService: RestService
  ) { }

  ngOnInit() {
    this.restService.getCards().subscribe(res => {
      this._cards = res.map(card => <Card>card);
    });

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

  get cards(): Card[] {
    return this._cards;
  }
}
