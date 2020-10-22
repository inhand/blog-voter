import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BlogListComponent } from '../blog/blog-list/blog-list.component';
import { BlogEntryComponent } from './blog-entry/blog-entry.component';
import { VoterModule } from '../voter/voter.module';
import { TaggerModule } from '../tagger/tagger.module';
import { BlogService } from './blog-service.service';

@NgModule({
  declarations: [BlogListComponent, BlogEntryComponent],
  exports: [
    BlogListComponent
  ],
  imports: [
    CommonModule,
    VoterModule,
    TaggerModule
  ],
  providers: [
    BlogService
  ]
})
export class BlogModule { }
