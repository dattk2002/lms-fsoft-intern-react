import { TestBed } from '@angular/core/testing';

import { CreateClassAddSyllabusService } from './create-class-add-syllabus.service';

describe('CreateClassAddSyllabusService', () => {
  let service: CreateClassAddSyllabusService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CreateClassAddSyllabusService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
