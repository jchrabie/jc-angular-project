import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BlogComponent } from './blog.component';
import { ArticleComponent } from './article/article.component';

const routes: Routes = [
  {
    path: 'blog',
    component: BlogComponent,
  },
  {
    path: 'blog/:template',
    component: ArticleComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BlogRoutingModule {}
