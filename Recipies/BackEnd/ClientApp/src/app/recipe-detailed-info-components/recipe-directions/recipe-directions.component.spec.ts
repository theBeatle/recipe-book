import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RecipeDirectionsComponent } from './recipe-directions.component';

describe('RecipeDirectionsComponent', () => {
  let component: RecipeDirectionsComponent;
  let fixture: ComponentFixture<RecipeDirectionsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RecipeDirectionsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RecipeDirectionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
