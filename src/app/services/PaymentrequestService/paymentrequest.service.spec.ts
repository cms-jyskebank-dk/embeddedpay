import { TestBed } from '@angular/core/testing';

import { PaymentrequestService } from './paymentrequest.service';

describe('PaymentrequestService', () => {
  let service: PaymentrequestService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PaymentrequestService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
