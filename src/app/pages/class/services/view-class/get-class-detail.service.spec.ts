import { TestBed } from '@angular/core/testing';

import { GetClassDetailService } from './get-class-detail.service';

describe('GetClassDetailService', () => {
  let service: GetClassDetailService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GetClassDetailService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
