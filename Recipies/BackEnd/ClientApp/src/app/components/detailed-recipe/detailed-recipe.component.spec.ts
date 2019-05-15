import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailedRecipeComponent } from './detailed-recipe.component';

describe('DetailedRecipeComponent', () => {
  let component: DetailedRecipeComponent;
  let fixture: ComponentFixture<DetailedRecipeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetailedRecipeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailedRecipeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
