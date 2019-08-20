import { Component, OnInit, ViewEncapsulation, ViewChild, ElementRef } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { blog, Article } from '../shared/constants/blog.constants';


@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class BlogComponent implements OnInit {
  public article: Article;
  public card = {
    title: 'Joël CHRABIE',
    subtitleRaw: 'devweb',
    imagePath: '/assets/carteDeVisite.jpg '
  };

  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit() {
    this.activatedRoute
      .params
      .subscribe(param => {
        this.article = blog.find(art => art.template === param.template);

        if (!this.article) {
          this.router.navigate(['/']);
        }
      });
  }

  scrollToElement(id: string): void {
    document.getElementById(id).scrollIntoView({behavior: 'smooth', block: 'center', inline: 'start'});
  }
}
