import { TestBed } from '@angular/core/testing';

import { GallaryService } from './gallary.service';

describe('GallaryService', () => {
  let service: GallaryService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GallaryService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
