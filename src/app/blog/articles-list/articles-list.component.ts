import { Component, OnInit } from '@angular/core';
import { BlogService } from '../blog.service';

@Component({
  selector: 'app-articles-list',
  templateUrl: './articles-list.component.html',
  styleUrls: ['./articles-list.component.scss'],
})
export class ArticlesListComponent implements OnInit {
  get articles() {
    return this.blogService.articles;
  }

  constructor(private blogService: BlogService) {}

  ngOnInit(): void {}
}
