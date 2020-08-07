import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { blog, Article } from '../../shared/constants/blog.constants';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.scss'],
})
export class ArticleComponent implements OnInit {
  public article: Article;
  public card = {
    title: 'Joël CHRABIE',
    subtitleRaw: 'devweb',
    imagePath: '/assets/carteDeVisite.jpg ',
  };

  constructor(private activatedRoute: ActivatedRoute, private router: Router) {}

  ngOnInit() {
    this.activatedRoute.params.subscribe((param) => {
      this.article = blog.find((art) => art.template === param.template);

      if (!this.article) {
        this.router.navigate(['/']);
      }
    });
  }

  public scrollToElement(id?: string): void {
    if (id) {
      document.getElementById(id).scrollIntoView({ behavior: 'smooth', block: 'center', inline: 'start' });

      return;
    }

    document.getElementsByClassName('mat-drawer-content')[0].scroll({
      top: 0,
      left: 0,
      behavior: 'smooth',
    });
  }
}
