import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Article } from '../blog.model';
import { BlogService } from '../blog.service';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.scss'],
})
export class ArticleComponent implements OnInit {
  selectedArticle: Article | undefined;
  loading = true;

  constructor(
    private activatedRoute: ActivatedRoute,
    private blogService: BlogService
  ) {}

  ngOnInit(): void {
    const articleId = this.activatedRoute.snapshot.params['articleId'];
    if (articleId) {
      setTimeout(() => {
        this.selectedArticle = this.blogService.articles.find(
          (a) => a.id === articleId
        );
        this.loading = false;
      }, 2000);
    }
  }
}
