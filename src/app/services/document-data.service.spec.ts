import { inject, TestBed } from '@angular/core/testing';

import { PublicRecordDataService } from './public-record-data.service';

describe('DocumentDataService', () => {
	beforeEach(() => {
		TestBed.configureTestingModule({
			providers: [PublicRecordDataService]
		});
	});

	it('should be created', inject([PublicRecordDataService], (service: PublicRecordDataService) => {
		expect(service).toBeTruthy();
	}));
});
