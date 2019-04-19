import { TestBed, inject } from '@angular/core/testing';

import { TestAuthService } from './test-auth.service';

describe('TestAuthService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TestAuthService]
    });
  });

  it('should be created', inject([TestAuthService], (service: TestAuthService) => {
    expect(service).toBeTruthy();
  }));
});
