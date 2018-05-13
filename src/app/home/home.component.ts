import { Component, OnInit } from '@angular/core';
import { AnalyticsService } from '../service/analytics.service';
import Card from '../../model/Card';
import { RestService } from '../service/rest.service';
import * as Typed from 'typed.js';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  private cards: Card[] = [];
  private card: Card;

  constructor(
    public analyticsService: AnalyticsService,
    public restService: RestService
  ) { }

  ngOnInit() {
    this.restService.getCards().subscribe(res => {
      this.cards = res.map(card => <Card>card);
    });

    const options = {
      strings: ['Web', 'Appli Hybride', 'Angular', 'Front', 'Ionic', 'Node'],
      typeSpeed: 100,
      backSpeed: 100,
      showCursor: true,
      cursorChar: '|',
      loop: true
    };

    const typed = new Typed('.typing-element', options);
  }

  getCards(): Card[] {
    return this.cards;
  }

}
