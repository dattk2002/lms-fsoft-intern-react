import { TestBed } from '@angular/core/testing';

import { ListOfSyllabusService } from './list-of-syllabus.service';

describe('ListOfSyllabusService', () => {
  let service: ListOfSyllabusService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ListOfSyllabusService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
