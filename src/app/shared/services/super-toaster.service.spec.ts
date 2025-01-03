import { TestBed } from '@angular/core/testing';

import { SuperToasterService } from './super-toaster.service';

describe('SuperToasterService', () => {
  let service: SuperToasterService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SuperToasterService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
