import { Component, Input, ViewEncapsulation } from '@angular/core';
import { Article } from '../../../shared/constants/blog.constants';

@Component({
  selector: 'app-article-content',
  templateUrl: './article-content.component.html',
  styleUrls: ['./article-content.component.scss'],
})
export class ArticleContentComponent {
  @Input() article: Article;

  constructor() { }

  get breadcrumbs(): any {
    return this.article.breadcrumbs;
  }
}
