import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlogEntryComponent } from './blog-entry.component';
import { RowType } from '../models/blog.model';

describe('BlogEntryComponent', () => {
  let component: BlogEntryComponent;
  let fixture: ComponentFixture<BlogEntryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BlogEntryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BlogEntryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should apply correct even-row classs if even row', () => {
    component.rowType = RowType.EVEN;
    const classToApply = component.applyRowTypeClasses();
    expect(classToApply).toBe('even-row');
  });

  it('should apply correct odd-row classs if odd row', () => {
    component.rowType = RowType.ODD;
    const classToApply = component.applyRowTypeClasses();
    expect(classToApply).toBe('odd-row');
  });
});
