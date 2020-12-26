import { TestBed } from '@angular/core/testing';

import { ClustService } from './clust.service';

describe('ClustService', () => {
  let service: ClustService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ClustService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
