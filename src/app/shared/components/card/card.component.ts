import { Component, OnInit, Input } from '@angular/core';
import Card from '../../../../model/Card';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {
  @Input() private cardData: Card;
  @Input() private isList?: boolean;


  get card(): Card {
    return this.cardData;
  }

  constructor(private route: ActivatedRoute) { }

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

  goTo(link: string) {
    if (!link) {
      return;
    }

    window.open(link, '_blank');
  }

}
