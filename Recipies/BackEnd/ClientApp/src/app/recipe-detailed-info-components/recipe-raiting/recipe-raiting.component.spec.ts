import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RecipeRaitingComponent } from './recipe-raiting.component';

describe('RecipeRaitingComponent', () => {
  let component: RecipeRaitingComponent;
  let fixture: ComponentFixture<RecipeRaitingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RecipeRaitingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RecipeRaitingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
