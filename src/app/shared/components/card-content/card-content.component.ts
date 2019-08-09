import { Component, OnInit, Input } from '@angular/core';
import CardContent from '../../../../model/CardContent';

@Component({
  selector: 'app-card-content',
  templateUrl: './card-content.component.html',
  styleUrls: ['./card-content.component.scss']
})
export class CardContentComponent implements OnInit {
  @Input() private cardContent: CardContent[] | string;
  @Input() public isList: boolean;

  constructor() { }

  ngOnInit() {
  }

  getCardContent():  CardContent[] | string {
    return this.cardContent;
  }

}
