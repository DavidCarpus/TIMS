import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Notice } from 'src/app/Components/notices/notices.component';
import { PublicRecordDataService } from 'src/app/services/public-record-data.service';

@Component({
	selector: 'app-home',
	templateUrl: './home.component.html',
	styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
	public notices$: Observable<Notice[]>;

	constructor(
		private publicRecords: PublicRecordDataService
	) { }

	ngOnInit() {
		this.notices$ = this.publicRecords.fetchNotices('All');
	}

}
