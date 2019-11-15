import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IdeaPostComponent } from './idea-post.component';

describe('IdeaPostComponent', () => {
  let component: IdeaPostComponent;
  let fixture: ComponentFixture<IdeaPostComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IdeaPostComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IdeaPostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
