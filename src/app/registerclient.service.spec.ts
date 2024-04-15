import { TestBed } from '@angular/core/testing';

import { RegisterclientService } from './registerclient.service';

describe('RegisterclientService', () => {
  let service: RegisterclientService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RegisterclientService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
