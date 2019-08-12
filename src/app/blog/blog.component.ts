import { Component, OnInit, HostListener } from '@angular/core';
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
    imagePath: '/assets/carteDeVisite.jpg '
  };

  constructor() { }

  ngOnInit() {
  }

}
