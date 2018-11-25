import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';


export interface PublicRecord {
	id: number;
	description: string;
	postDate: Date;
}

export interface NoticeRecord extends PublicRecord {
	expireDate?: Date;
}

export interface MeetingRecord extends PublicRecord {
	meetingDate: Date;
}

@Injectable({
	providedIn: 'root'
})
export class PublicRecordDataService {

	constructor() { }


	fetchMinutesAndAgendas(orgName: string): Observable<MeetingRecord[]> {
		const now = new Date(Date.now());
		return of([
			{
				id: 0, description: orgName + ' - Meeting Record 1', postDate: now,
				meetingDate: new Date((new Date(now)).setTime(now.getTime() + (1 * 60 * 60 * 1000))),
			},
			{
				id: 1, description: orgName + ' - Meeting Record 2',
				postDate: new Date((new Date(now)).setTime(now.getTime() + (1 * 60 * 60 * 1000))),
				meetingDate: new Date((new Date(now)).setTime(now.getTime() + (1 * 60 * 60 * 1000))),
			},
			{
				id: 2, description: orgName + ' - Meeting Record 3',
				postDate: new Date((new Date(now)).setTime(now.getTime() + (3 * 60 * 60 * 1000))),
				meetingDate: new Date((new Date(now)).setTime(now.getTime() + (1 * 60 * 60 * 1000))),
			},
		]);
	}

	fetchNotices(orgName: string): Observable<NoticeRecord[]> {
		// if (orgName === 'All' || orgName === 'Planning') {
		const now = new Date(Date.now());
		return of([
			{ id: 0, description: orgName + ' - Notice 1', postDate: now },
			{
				id: 1, description: orgName + ' - Notice 2',
				postDate: new Date((new Date(now)).setTime(now.getTime() + (1 * 60 * 60 * 1000)))
			},
			{
				id: 2, description: orgName + ' - Notice 3',
				postDate: new Date((new Date(now)).setTime(now.getTime() + (3 * 60 * 60 * 1000)))
			},
		]);
		// } else {
		// 	return of(null);
		// }
	}

	fetchDocuments(orgName: string): Observable<PublicRecord[]> {
		const now = new Date(Date.now());
		return of(Array.from({ length: 3 }, (item, index) => {
			console.log('item', index, item);
			return {
				id: 0,
				postDate: new Date((new Date(now)).setTime(now.getTime() + (3 * 60 * 60 * 1000))),
				description: orgName + ` - Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
					labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
					laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
					voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
					cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.`
			};
		}));
	}

}
