import { TestBed, inject } from '@angular/core/testing';

import { FleurService } from './fleur.service';

describe('FleurService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [FleurService]
    });
  });

  it('should be created', inject([FleurService], (service: FleurService) => {
    expect(service).toBeTruthy();
  }));
});
