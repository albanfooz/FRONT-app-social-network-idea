import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PopupListCollaborateursComponent } from './popup-list-collaborateurs.component';

describe('PopupListCollaborateursComponent', () => {
  let component: PopupListCollaborateursComponent;
  let fixture: ComponentFixture<PopupListCollaborateursComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PopupListCollaborateursComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PopupListCollaborateursComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
