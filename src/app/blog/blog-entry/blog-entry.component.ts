import { Component, Input, OnInit } from '@angular/core';
import { Blog, RowType } from '../models/blog.model';

@Component({
  selector: 'app-blog-entry',
  templateUrl: './blog-entry.component.html',
  styleUrls: ['./blog-entry.component.scss']
})
export class BlogEntryComponent implements OnInit {

  @Input() rowType: RowType = RowType.ODD;
  @Input() blog: Blog = { id: '', vote: 0, header: '', content1: '', content2: ''};

  constructor() { }

  ngOnInit(): void {
  }

  applyRowTypeClasses(): string {
    return (this.rowType === RowType.EVEN) ? 'even-row' : 'odd-row';
  }
}
