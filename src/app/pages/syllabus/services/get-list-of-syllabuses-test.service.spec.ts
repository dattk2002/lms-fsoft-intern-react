import { TestBed } from '@angular/core/testing';

import { GetListOfSyllabusesTestService } from './get-list-of-syllabuses-test.service';

describe('GetListOfSyllabusesTestService', () => {
  let service: GetListOfSyllabusesTestService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GetListOfSyllabusesTestService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
