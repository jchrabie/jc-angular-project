import { Component, OnInit } from '@angular/core';
import CardContent from '../../model/CardContent';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.scss']
})
export class BlogComponent implements OnInit {
  public card = {
    title: 'Joël CHRABIE',
    subtitleRaw: 'devweb',
    icon: 'code',
    imagePath: '/assets/carteDeVisite.jpg ',
    imageAlt: ' ',
    content: [
      new CardContent('06 88 74 00 93', 'Mobile', 'phone'),
      new CardContent('36 Boulevard du Tertre - Saint-Herblain', 'Localisation', 'place'),
      new CardContent('joel.chrabie@gmail.com', 'Mail', 'email')
    ]
  };
  constructor() { }

  ngOnInit() {
  }

}
