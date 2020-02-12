import { TestBed } from '@angular/core/testing';

import { PaidService } from './paid.service';

describe('PaidService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PaidService = TestBed.get(PaidService);
    expect(service).toBeTruthy();
  });
});
