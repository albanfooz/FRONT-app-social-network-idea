import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PageIdeaComponent } from './page-idea.component';

describe('PageIdeaComponent', () => {
  let component: PageIdeaComponent;
  let fixture: ComponentFixture<PageIdeaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PageIdeaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PageIdeaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
