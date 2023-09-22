import { TestBed } from '@angular/core/testing';

import { SyllabusDetailOutlineService } from './syllabus-detail-outline.service';

describe('SyllabusDetailOutlineService', () => {
  let service: SyllabusDetailOutlineService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SyllabusDetailOutlineService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
