import { TestBed } from '@angular/core/testing';

import { FilterTrainingCalendarServiceService } from './filter-training-calendar-service.service';

describe('FilterTrainingCalendarServiceService', () => {
  let service: FilterTrainingCalendarServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FilterTrainingCalendarServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
