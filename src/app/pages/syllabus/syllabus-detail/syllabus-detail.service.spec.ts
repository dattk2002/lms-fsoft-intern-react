import { TestBed } from '@angular/core/testing';

import { SyllabusDetailService } from './syllabus-detail.service';

describe('SyllabusDetailService', () => {
  let service: SyllabusDetailService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SyllabusDetailService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
