import { NgModule } from '@angular/core';
import { ShareButtonsModule } from '@ngx-share/buttons';

import { BlogRoutingModule } from './blog-routing.module';
import { BlogComponent } from './blog.component';
import { SharedModule } from '../shared/shared.module';
import { ArticleComponent } from './article/article.component';
import { ArticleContentComponent } from './article/article-content/article-content.component';
import { BreadcrumbsComponent } from './breadcrumbs/breadcrumbs.component';

@NgModule({
  imports: [
    SharedModule,
    BlogRoutingModule,
    ShareButtonsModule,
  ],
  declarations: [
    BlogComponent,
    ArticleComponent,
    ArticleContentComponent,
    BreadcrumbsComponent,
  ]
})
export class BlogModule { }
