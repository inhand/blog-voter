import { Injectable } from '@angular/core';
import { Blog } from './models/blog.model';

@Injectable({
  providedIn: 'root'
})
export class BlogService {

  blogs = new Array<Blog>();

  constructor() {
    const blog1: Blog = {
      id: 'blog1',
      header: 'Heading One',
      content1: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi convallis euismod quam, non feugiat arcu malesuada eu. Nunc volutpat neque eu cursus cursus. Etiam non varius dolor, eu scelerisque lacus. Sed cursus blandit tortor, ut tincidunt magna blandit vitae. Nullam dui ex, aliquet rhoncus sapien ut, iaculis pellentesque odio. Donec mattis eu nulla et tincidunt. Praesent a ipsum ornare, viverra ipsum a, feugiat libero. Pellentesque vitae nulla sodales, mattis lacus vel, imperdiet nisi. Phasellus volutpat neque at nibh auctor scelerisque. Etiam pulvinar eros non augue venenatis, ac convallis quam euismod. Ut ut turpis vitae sem commodo gravida. Ut eget nunc dui. Quisque vitae mauris nec erat fermentum maximus. Ut libero lacus, vestibulum eget congue et, efficitur eget risus. Suspendisse aliquet massa nec diam elementum, ac feugiat dui hendrerit. Fusce vitae nisi molestie, rhoncus diam quis, facilisis risus.',
      content2: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi convallis euismod quam, non feugiat arcu malesuada eu. Nunc volutpat neque eu cursus cursus. Etiam non varius dolor, eu scelerisque lacus. Sed cursus blandit tortor, ut tincidunt magna blandit vitae. Nullam dui ex, aliquet rhoncus sapien ut, iaculis pellentesque odio. Donec mattis eu nulla et tincidunt. Praesent a ipsum ornare, viverra ipsum a, feugiat libero. Pellentesque vitae nulla sodales, mattis lacus vel, imperdiet nisi. Phasellus volutpat neque at nibh auctor scelerisque. Etiam pulvinar eros non augue venenatis, ac convallis quam euismod. Ut ut turpis vitae sem commodo gravida. Ut eget nunc dui. Quisque vitae mauris nec erat fermentum maximus. Ut libero lacus, vestibulum eget congue et, efficitur eget risus. Suspendisse aliquet massa nec diam elementum, ac feugiat dui hendrerit. Fusce vitae nisi molestie, rhoncus diam quis, facilisis risus.',
      vote: 0
    };
    this.blogs.push(blog1);
    const blog2: Blog = {
      id: 'blog2',
      header: 'Heading Two',
      content1: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi convallis euismod quam, non feugiat arcu malesuada eu. Nunc volutpat neque eu cursus cursus. Etiam non varius dolor, eu scelerisque lacus. Sed cursus blandit tortor, ut tincidunt magna blandit vitae. Nullam dui ex, aliquet rhoncus sapien ut, iaculis pellentesque odio. Donec mattis eu nulla et tincidunt. Praesent a ipsum ornare, viverra ipsum a, feugiat libero. Pellentesque vitae nulla sodales, mattis lacus vel, imperdiet nisi. Phasellus volutpat neque at nibh auctor scelerisque. Etiam pulvinar eros non augue venenatis, ac convallis quam euismod. Ut ut turpis vitae sem commodo gravida. Ut eget nunc dui. Quisque vitae mauris nec erat fermentum maximus. Ut libero lacus, vestibulum eget congue et, efficitur eget risus. Suspendisse aliquet massa nec diam elementum, ac feugiat dui hendrerit. Fusce vitae nisi molestie, rhoncus diam quis, facilisis risus.',
      content2: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi convallis euismod quam, non feugiat arcu malesuada eu. Nunc volutpat neque eu cursus cursus. Etiam non varius dolor, eu scelerisque lacus. Sed cursus blandit tortor, ut tincidunt magna blandit vitae. Nullam dui ex, aliquet rhoncus sapien ut, iaculis pellentesque odio. Donec mattis eu nulla et tincidunt. Praesent a ipsum ornare, viverra ipsum a, feugiat libero. Pellentesque vitae nulla sodales, mattis lacus vel, imperdiet nisi. Phasellus volutpat neque at nibh auctor scelerisque. Etiam pulvinar eros non augue venenatis, ac convallis quam euismod. Ut ut turpis vitae sem commodo gravida. Ut eget nunc dui. Quisque vitae mauris nec erat fermentum maximus. Ut libero lacus, vestibulum eget congue et, efficitur eget risus. Suspendisse aliquet massa nec diam elementum, ac feugiat dui hendrerit. Fusce vitae nisi molestie, rhoncus diam quis, facilisis risus.',
      vote: 0
    };
    this.blogs.push(blog2);
    const blog3: Blog = {
      id: 'blog3',
      header: 'Heading Three',
      content1: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi convallis euismod quam, non feugiat arcu malesuada eu. Nunc volutpat neque eu cursus cursus. Etiam non varius dolor, eu scelerisque lacus. Sed cursus blandit tortor, ut tincidunt magna blandit vitae. Nullam dui ex, aliquet rhoncus sapien ut, iaculis pellentesque odio. Donec mattis eu nulla et tincidunt. Praesent a ipsum ornare, viverra ipsum a, feugiat libero. Pellentesque vitae nulla sodales, mattis lacus vel, imperdiet nisi. Phasellus volutpat neque at nibh auctor scelerisque. Etiam pulvinar eros non augue venenatis, ac convallis quam euismod. Ut ut turpis vitae sem commodo gravida. Ut eget nunc dui. Quisque vitae mauris nec erat fermentum maximus. Ut libero lacus, vestibulum eget congue et, efficitur eget risus. Suspendisse aliquet massa nec diam elementum, ac feugiat dui hendrerit. Fusce vitae nisi molestie, rhoncus diam quis, facilisis risus.',
      content2: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi convallis euismod quam, non feugiat arcu malesuada eu. Nunc volutpat neque eu cursus cursus. Etiam non varius dolor, eu scelerisque lacus. Sed cursus blandit tortor, ut tincidunt magna blandit vitae. Nullam dui ex, aliquet rhoncus sapien ut, iaculis pellentesque odio. Donec mattis eu nulla et tincidunt. Praesent a ipsum ornare, viverra ipsum a, feugiat libero. Pellentesque vitae nulla sodales, mattis lacus vel, imperdiet nisi. Phasellus volutpat neque at nibh auctor scelerisque. Etiam pulvinar eros non augue venenatis, ac convallis quam euismod. Ut ut turpis vitae sem commodo gravida. Ut eget nunc dui. Quisque vitae mauris nec erat fermentum maximus. Ut libero lacus, vestibulum eget congue et, efficitur eget risus. Suspendisse aliquet massa nec diam elementum, ac feugiat dui hendrerit. Fusce vitae nisi molestie, rhoncus diam quis, facilisis risus.',
      vote: 0
    };
    this.blogs.push(blog3);
  }

  getBlogs(): Blog[] {
    return this.blogs;
  }

  decreaseVote(blogToDecrease: Blog): void {
    this.blogs = this.blogs.map((blog) => {
      if (blog.id === blogToDecrease.id) {
        blog.vote--;
        if (blog.vote < 0) {
          blog.vote = 0;
        }
      }
      return blog;
    });
  }

  increaseVote(blogToIncrease: Blog): void {
    this.blogs = this.blogs.map((blog) => {
      if (blog.id === blogToIncrease.id) {
        blog.vote++;
        if (blog.vote > 10) {
          blog.vote = 10;
        }
      }
      return blog;
    });
  }

}
