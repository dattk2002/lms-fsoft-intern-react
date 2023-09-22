import { TestBed } from '@angular/core/testing';

import { FilterSyllabusService } from './filter-syllabus.service';

describe('FilterSyllabusService', () => {
  let service: FilterSyllabusService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FilterSyllabusService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
