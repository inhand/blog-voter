import { TestBed } from '@angular/core/testing';

import { BlogService } from './blog-service.service';

describe('BlogService', () => {
  let service: BlogService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BlogService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should be created with 3 blogs', () => {
    expect(service.blogs.length).toBe(3);
  });

  it('get blogs should return blogs', () => {
    const blogs = service.getBlogs();
    expect(blogs).toBe(service.blogs);
  });

  it('increaseVote should increase blog vote by one', () => {
    service.blogs[0].vote = 0;
    service.increaseVote(service.blogs[0]);
    expect(service.blogs[0].vote).toBe(1);
  });

  it('decreaseVote should decrease blog vote by one', () => {
    service.blogs[0].vote = 3;
    service.decreaseVote(service.blogs[0]);
    expect(service.blogs[0].vote).toBe(2);
  });

  it('vote should should stay at 10 if more up votes', () => {
    service.blogs[0].vote = 9;
    service.increaseVote(service.blogs[0]);
    service.increaseVote(service.blogs[0]);
    service.increaseVote(service.blogs[0]);
    expect(service.blogs[0].vote).toBe(10);
  });

  it('vote should stay at 0 if more down votes ', () => {
    service.blogs[0].vote = 1;
    service.decreaseVote(service.blogs[0]);
    service.decreaseVote(service.blogs[0]);
    service.decreaseVote(service.blogs[0]);
    expect(service.blogs[0].vote).toBe(0);
  });
});
