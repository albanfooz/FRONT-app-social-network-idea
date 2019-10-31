import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BarIconsIdeeComponent } from './bar-icons-idee.component';

describe('BarIconsIdeeComponent', () => {
  let component: BarIconsIdeeComponent;
  let fixture: ComponentFixture<BarIconsIdeeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BarIconsIdeeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BarIconsIdeeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
