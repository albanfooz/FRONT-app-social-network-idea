import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListeCollaborateursProjetComponent } from './liste-collaborateurs-projet.component';

describe('ListeCollaborateursProjetComponent', () => {
  let component: ListeCollaborateursProjetComponent;
  let fixture: ComponentFixture<ListeCollaborateursProjetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListeCollaborateursProjetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListeCollaborateursProjetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
