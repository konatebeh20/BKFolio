import { TestBed } from '@angular/core/testing';

import { ServicesPagesService } from './services-pages.service';

describe('ServicesPagesService', () => {
  let service: ServicesPagesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServicesPagesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
