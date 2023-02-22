import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ArticleComponent } from './article/article.component';
import { ArticlesListComponent } from './articles-list/articles-list.component';
import { BlogService } from './blog.service';
import { BlogRoutingModule } from './blog-routing.module';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [ArticleComponent, ArticlesListComponent],
  providers: [BlogService],
  imports: [CommonModule, BlogRoutingModule, SharedModule],
})
export class BlogModule {}
