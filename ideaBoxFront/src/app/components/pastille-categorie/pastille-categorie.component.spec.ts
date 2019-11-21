import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { PastilleCategorieComponent } from './pastille-categorie.component';

describe('PastilleCategorieComponent', () => {
  let component: PastilleCategorieComponent;
  let fixture: ComponentFixture<PastilleCategorieComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PastilleCategorieComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PastilleCategorieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
