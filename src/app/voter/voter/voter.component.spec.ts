import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VoterComponent } from './voter.component';
import { RowType } from '../../blog/models/blog.model';
import { By } from '@angular/platform-browser';

describe('VoterComponent', () => {
  let component: VoterComponent;
  let fixture: ComponentFixture<VoterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VoterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VoterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have a light thumb up image for odd row', () => {
    component.rowType = RowType.ODD;
    component.setThumbImages();
    expect(component.upImagePath).toEqual('assets/images/thumb-up-light.png');
  });

  it('should have a light thumb down image for odd row', () => {
    component.rowType = RowType.ODD;
    component.setThumbImages();
    expect(component.downImagePath).toContain('thumb-down-light.png');
  });

  it('should have a dark thumb up image for even row', () => {
    component.rowType = RowType.EVEN;
    component.setThumbImages();
    expect(component.upImagePath).toEqual('assets/images/thumb-up-dark.png');
  });

  it('should have a dark thumb down image for even row', () => {
    component.rowType = RowType.EVEN;
    component.setThumbImages();
    expect(component.downImagePath).toEqual('assets/images/thumb-down-dark.png');
  });

  it('should display correct vote count', () => {
    component.blog = {id: 'blogtest', vote: 3, header: '', content1: '', content2: ''};
    fixture.detectChanges();
    const el = fixture.debugElement.query(By.css('.vote-count'));
    const spanEl = el.nativeElement;
    expect(spanEl.innerHTML).toContain(3);
  });

});
