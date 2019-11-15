import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuConnexionComponent } from './menu-connexion.component';

describe('MenuConnexionComponent', () => {
  let component: MenuConnexionComponent;
  let fixture: ComponentFixture<MenuConnexionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MenuConnexionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MenuConnexionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
