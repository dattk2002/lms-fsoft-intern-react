import { TestBed } from '@angular/core/testing';

import { FilterTrainingClassServiceService } from './filter-training-class-service.service';

describe('FilterTrainingClassServiceService', () => {
  let service: FilterTrainingClassServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FilterTrainingClassServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
