import { TestBed, inject } from '@angular/core/testing';

import { SmoothieService } from './smoothie.service';

describe('SmoothieService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SmoothieService]
    });
  });

  it('should be created', inject([SmoothieService], (service: SmoothieService) => {
    expect(service).toBeTruthy();
  }));
});
