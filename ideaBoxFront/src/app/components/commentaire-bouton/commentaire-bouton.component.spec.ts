import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CommentaireBoutonComponent } from './commentaire-bouton.component';

describe('CommentaireBoutonComponent', () => {
  let component: CommentaireBoutonComponent;
  let fixture: ComponentFixture<CommentaireBoutonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CommentaireBoutonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CommentaireBoutonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
