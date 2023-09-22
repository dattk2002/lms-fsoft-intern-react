import { TestBed } from '@angular/core/testing';

import { TrainingProgramServiceService } from './training-program-service.service';

describe('TrainingProgramServiceService', () => {
  let service: TrainingProgramServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TrainingProgramServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
