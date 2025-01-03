import { TestBed } from '@angular/core/testing';

import { SuperLoaderService } from './super-loader.service';

describe('SuperLoaderService', () => {
  let service: SuperLoaderService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SuperLoaderService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
