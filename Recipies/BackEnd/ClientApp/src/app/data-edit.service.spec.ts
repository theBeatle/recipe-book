import { TestBed } from '@angular/core/testing';

import { DataEditService } from './data-edit.service';

describe('DataEditService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DataEditService = TestBed.get(DataEditService);
    expect(service).toBeTruthy();
  });
});
