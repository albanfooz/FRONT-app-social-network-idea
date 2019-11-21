import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IdeeListComponent } from './idee-list.component';

describe('IdeeListComponent', () => {
  let component: IdeeListComponent;
  let fixture: ComponentFixture<IdeeListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IdeeListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IdeeListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
