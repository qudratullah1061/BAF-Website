import { TestBed } from '@angular/core/testing';

import { CollectionpageService } from './collectionpage.service';

describe('CollectionpageService', () => {
  let service: CollectionpageService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CollectionpageService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
