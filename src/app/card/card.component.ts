import { Component, OnInit, Input } from '@angular/core';
import Card from '../../model/Card';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {
  @Input()
  private cardData: Card;

  constructor() { }

  ngOnInit() {
    console.log(this.cardData);
  }
}
