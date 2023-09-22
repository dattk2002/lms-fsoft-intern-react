import { TestBed } from '@angular/core/testing';

import { CreateClassService } from './create-class.service';

describe('CreateClassService', () => {
  let service: CreateClassService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CreateClassService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
