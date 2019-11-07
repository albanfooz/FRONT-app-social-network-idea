import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BoutonCollaborateurComponent } from './bouton-collaborateur.component';

describe('BoutonCollaborateurComponent', () => {
  let component: BoutonCollaborateurComponent;
  let fixture: ComponentFixture<BoutonCollaborateurComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BoutonCollaborateurComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BoutonCollaborateurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
