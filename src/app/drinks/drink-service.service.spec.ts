import { TestBed } from '@angular/core/testing';

import { CoctailServiceService } from './drink-service.service';

describe('CoctailServiceService', () => {
  let service: CoctailServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CoctailServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
