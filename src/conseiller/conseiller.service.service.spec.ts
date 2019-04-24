import { TestBed, inject } from '@angular/core/testing';

import { Conseiller.ServiceService } from './conseiller.service.service';

describe('Conseiller.ServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Conseiller.ServiceService]
    });
  });

  it('should be created', inject([Conseiller.ServiceService], (service: Conseiller.ServiceService) => {
    expect(service).toBeTruthy();
  }));
});
