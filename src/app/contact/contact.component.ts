import { TranslateService } from '@ngx-translate/core';

import { Component, OnInit } from '@angular/core';
import CardContent from '../../model/CardContent';


@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {
  public card: any;

  constructor(private translateService: TranslateService) {
    this.translateService.onLangChange
      .subscribe(() => this.translateService.get(this.card.subtitleRaw)
        .subscribe(res => this.card.subtitle = res));
  }

  ngOnInit() {
    this.initCard();
  }

  initCard(): void {
    this.card = {
      title: 'Joël CHRABIE',
      subtitleRaw: 'devweb',
      icon: 'code',
      imagePath: '/assets/carteDeVisite.jpg ',
      imageAlt: ' ',
      content: [
        new CardContent('06 88 74 00 93', 'Mobile', 'phone'),
        new CardContent('36 Boulevard du Tertre - Saint-Herblain', 'Localisation', 'place'),
        new CardContent('contact@joelchrabie.com', 'Mail', 'email')
      ]
    };
  }
}
