import { Component, OnInit } from '@angular/core';
import { Blog, RowType } from '../models/blog.model';
import { BlogService } from '../blog-service.service';

@Component({
  selector: 'app-blog-list',
  templateUrl: './blog-list.component.html',
  styleUrls: ['./blog-list.component.scss']
})
export class BlogListComponent implements OnInit {

  rowType = RowType;
  blogs = new Array<Blog>();

  constructor(private blogService: BlogService) { }

  ngOnInit(): void {
    this.blogs = this.blogService.getBlogs();
  }

}
