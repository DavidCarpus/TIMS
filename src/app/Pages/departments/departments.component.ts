import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Notice } from 'src/app/Components/notices/notices.component';
import { NoticesService } from 'src/app/services/notices.service';

@Component({
	selector: 'app-departments',
	templateUrl: './departments.component.html',
	styleUrls: ['./departments.component.css']
})
export class DepartmentsComponent implements OnInit {
	public notices$: Observable<Notice[]>;
	public organization$: Observable<string>;

	constructor(
		public router: Router,
		public activatedRoute: ActivatedRoute,
		private noticesData: NoticesService) { }

	ngOnInit() {
		this.activatedRoute.url.subscribe(url => {
			this.notices$ = this.noticesData.fetchNotices(url[1].toString());
		});
		this.organization$ = this.activatedRoute.url.pipe(
			map(url => {
				return url[1].toString();
			})
		);

	}

}
