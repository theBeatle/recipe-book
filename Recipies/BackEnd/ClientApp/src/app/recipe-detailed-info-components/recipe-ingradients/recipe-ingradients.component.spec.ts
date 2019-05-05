import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RecipeIngradientsComponent } from './recipe-ingradients.component';

describe('RecipeIngradientsComponent', () => {
  let component: RecipeIngradientsComponent;
  let fixture: ComponentFixture<RecipeIngradientsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RecipeIngradientsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RecipeIngradientsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
