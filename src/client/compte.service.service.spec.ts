import { TestBed, inject } from '@angular/core/testing';

import { Compte.ServiceService } from './compte.service.service';

describe('Compte.ServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Compte.ServiceService]
    });
  });

  it('should be created', inject([Compte.ServiceService], (service: Compte.ServiceService) => {
    expect(service).toBeTruthy();
  }));
});
