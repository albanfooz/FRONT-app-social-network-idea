import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PopUpDetailsComponent } from './pop-up-details.component';

describe('PopUpDetailsComponent', () => {
  let component: PopUpDetailsComponent;
  let fixture: ComponentFixture<PopUpDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PopUpDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PopUpDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
