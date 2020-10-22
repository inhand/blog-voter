import { Component, Input, OnInit } from '@angular/core';
import { Blog, RowType } from '../../blog/models/blog.model';
import { BlogService } from '../../blog/blog-service.service';

@Component({
  selector: 'app-voter',
  templateUrl: './voter.component.html',
  styleUrls: ['./voter.component.scss']
})
export class VoterComponent implements OnInit {

  upImagePath = '';
  downImagePath = '';

  @Input() rowType: RowType;
  @Input() blog: Blog = { id: '', vote: 0, header: '', content1: '', content2: ''};

  constructor(private blogService: BlogService) {
  }

  ngOnInit(): void {
    this.setThumbImages();
  }

  downVote(): void {
    this.blogService.decreaseVote(this.blog);
  }

  upVote(): void {
    this.blogService.increaseVote(this.blog);
  }

  setThumbImages(): void{
    if (this.rowType === RowType.EVEN) {
      this.upImagePath = 'assets/images/thumb-up-dark.png';
      this.downImagePath = 'assets/images/thumb-down-dark.png';
    } else {
      this.upImagePath = 'assets/images/thumb-up-light.png';
      this.downImagePath = 'assets/images/thumb-down-light.png';
    }
  }
}
