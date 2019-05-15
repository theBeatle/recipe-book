import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RecipeGalleriaComponent } from './recipe-galleria.component';

describe('RecipeGalleriaComponent', () => {
  let component: RecipeGalleriaComponent;
  let fixture: ComponentFixture<RecipeGalleriaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RecipeGalleriaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RecipeGalleriaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
