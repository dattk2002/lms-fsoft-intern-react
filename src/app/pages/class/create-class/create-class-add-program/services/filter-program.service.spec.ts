import { TestBed } from '@angular/core/testing';

import { FilterProgramService } from './filter-program.service';

describe('FilterProgramService', () => {
  let service: FilterProgramService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FilterProgramService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
