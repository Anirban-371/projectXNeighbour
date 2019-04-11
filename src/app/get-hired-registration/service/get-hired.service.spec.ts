import { TestBed, inject } from '@angular/core/testing';

import { GetHiredService } from './get-hired.service';

describe('GetHiredService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [GetHiredService]
    });
  });

  it('should be created', inject([GetHiredService], (service: GetHiredService) => {
    expect(service).toBeTruthy();
  }));
});
