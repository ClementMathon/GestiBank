import { TestBed, inject } from '@angular/core/testing';

import { ServiceProService } from './service-pro.service';

describe('ServiceProService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ServiceProService]
    });
  });

  it('should be created', inject([ServiceProService], (service: ServiceProService) => {
    expect(service).toBeTruthy();
  }));
});
