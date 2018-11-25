import { TestBed, inject } from '@angular/core/testing';

import { OrganizationDataService } from './organization-data.service';

describe('OrganizationDataService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [OrganizationDataService]
    });
  });

  it('should be created', inject([OrganizationDataService], (service: OrganizationDataService) => {
    expect(service).toBeTruthy();
  }));
});
