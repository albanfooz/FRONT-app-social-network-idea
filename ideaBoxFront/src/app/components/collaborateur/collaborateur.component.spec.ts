import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CollaborateurComponent } from './collaborateur.component';

describe('CollaborateurComponent', () => {
  let component: CollaborateurComponent;
  let fixture: ComponentFixture<CollaborateurComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CollaborateurComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CollaborateurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
