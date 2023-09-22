import { TestBed } from '@angular/core/testing';

import { GetAllTrainingClassServiceService } from './get-all-training-class-service.service';

describe('GetAllTrainingClassServiceService', () => {
  let service: GetAllTrainingClassServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GetAllTrainingClassServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
