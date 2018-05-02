import { Component, OnInit } from '@angular/core';
import { AnalyticsService } from '../service/analytics.service';
import Card from '../../model/Card';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  private cards: Card[] = [];
  private card: Card;

  constructor(public analyticsService: AnalyticsService) { }

  ngOnInit() {
    this.card = new Card();
    this.card.setTitle('A11y');
    this.card.setSubtitle('Accessibilité');
    this.card.setImagePath("/assets/a11y.jpg");
    this.card.setImageAlt('');
    this.card.setContent(`Améliorer l’accessibilité de votre site web vous permettra de toucher un public plus large, d’augmenter le trafic et les conversions sur votre site. Il faut toujours être conscient qu’entre 15% et 20% de la population souffrent d’un handicap, d’une forme ou d’une autre : handicap visuel, auditif, moteur… Ne pas travailler sur l’accessibilité web de son site, c’est se priver de millions de visiteurs potentiels.`);

    this.cards.push(this.card);
    
    this.card = new Card();

    this.card.setTitle('Design');
    this.card.setSubtitle('Matérial Design');
    this.card.setImagePath("/assets/design.jpg");
    this.card.setImageAlt('');
    this.card.setContent(`Pationné par l'informatique, je n'en reste pas moins attaché au rendu graphique de l'application ou du site que je créé. Si aucune règle ne m'est imposée, je laisse mon imaginaire vagabonder tout en m'inspirant de ce qui existe déjà sur le net.`);

    this.cards.push(this.card);
  }

  getCards(): Card[] {
    return this.cards;
  }

}
