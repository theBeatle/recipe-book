import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DataEditComponent } from './data-edit.component';

describe('DataEditComponent', () => {
  let component: DataEditComponent;
  let fixture: ComponentFixture<DataEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DataEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DataEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
