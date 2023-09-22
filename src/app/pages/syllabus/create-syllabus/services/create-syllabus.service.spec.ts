import { TestBed } from '@angular/core/testing';

import { CreateSyllabusService } from './create-syllabus.service';

describe('CreateSyllabusService', () => {
  let service: CreateSyllabusService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CreateSyllabusService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
