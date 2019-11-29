import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuListeCategoriesComponent } from './menu-liste-categories.component';

describe('MenuListeCategoriesComponent', () => {
  let component: MenuListeCategoriesComponent;
  let fixture: ComponentFixture<MenuListeCategoriesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MenuListeCategoriesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MenuListeCategoriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
