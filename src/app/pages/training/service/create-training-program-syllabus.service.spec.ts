import { TestBed } from '@angular/core/testing';

import { CreateTrainingProgramSyllabusService } from './create-training-program-syllabus.service';

describe('CreateTrainingProgramSyllabusService', () => {
  let service: CreateTrainingProgramSyllabusService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CreateTrainingProgramSyllabusService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
