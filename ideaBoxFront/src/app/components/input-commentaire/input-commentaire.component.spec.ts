import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InputCommentaireComponent } from './input-commentaire.component';

describe('InputCommentaireComponent', () => {
  let component: InputCommentaireComponent;
  let fixture: ComponentFixture<InputCommentaireComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InputCommentaireComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InputCommentaireComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
