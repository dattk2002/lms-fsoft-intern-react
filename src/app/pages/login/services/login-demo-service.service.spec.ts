import { TestBed } from '@angular/core/testing';

import { LoginDemoService } from './login-demo-service.service';

describe('LoginDemoServiceService', () => {
  let service: LoginDemoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LoginDemoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
