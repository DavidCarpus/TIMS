import { TestBed, inject } from '@angular/core/testing';

import { NoticesService } from './notices.service';

describe('NoticesService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [NoticesService]
    });
  });

  it('should be created', inject([NoticesService], (service: NoticesService) => {
    expect(service).toBeTruthy();
  }));
});
