import { Component, OnInit, Input } from '@angular/core';

import { Card } from '../../constants/cards.constants';
import { AnalyticsService } from '../../service/analytics.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
})
export class CardComponent implements OnInit {
  @Input() private cardData: Card;
  @Input() public isList?: boolean;

  get card(): Card {
    return this.cardData;
  }

  constructor(private analyticsService: AnalyticsService) {}

  ngOnInit() {
    if (!this.isList) {
      this.isList = false;
    }
  }

  getIconCard(imgPath: string = ''): string {
    const imgUrlArray = imgPath.split('/');

    if (imgUrlArray[1]) {
      imgUrlArray[imgUrlArray.length - 1] = `icon-${imgUrlArray[imgUrlArray.length - 1]}`;
    }

    const iconCardUrl: string = imgUrlArray.join('/');

    return iconCardUrl;
  }

  onShowMore(rawName: string, name: string) {
    this.analyticsService.emit('Card', 'showMore', 'click', rawName || name);
  }
}
