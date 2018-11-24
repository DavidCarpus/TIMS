import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

import { Notice } from '../Components/notices/notices.component';

@Injectable({
	providedIn: 'root'
})
export class NoticesService {

	constructor() { }

	fetchNotices(organization: string): Observable<Notice[]> {
		const now = new Date(Date.now());
		return of([
			{ id: 0, description: organization + ' - Test 1', postDate: now },
			{
				id: 1, description: organization + ' - Test 2',
				postDate: new Date((new Date(now)).setTime(now.getTime() + (1 * 60 * 60 * 1000)))
			},
			{
				id: 2, description: organization + ' - Test 3',
				postDate: new Date((new Date(now)).setTime(now.getTime() + (3 * 60 * 60 * 1000)))
			},
		]);
	}
}
