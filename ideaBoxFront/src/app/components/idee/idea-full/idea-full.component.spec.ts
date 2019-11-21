import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IdeaFullComponent } from './idea-full.component';

describe('IdeaFullComponent', () => {
  let component: IdeaFullComponent;
  let fixture: ComponentFixture<IdeaFullComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [IdeaFullComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IdeaFullComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
