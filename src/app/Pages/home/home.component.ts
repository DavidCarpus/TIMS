import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Notice } from 'src/app/Components/notices/notices.component';
import { NoticesService } from 'src/app/services/notices.service';

@Component({
	selector: 'app-home',
	templateUrl: './home.component.html',
	styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
	public notices$: Observable<Notice[]>;

	constructor(
		private noticesData: NoticesService
	) { }

	ngOnInit() {
		this.notices$ = this.noticesData.fetchNotices('All');
	}

}
