import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Notice } from 'src/app/Components/notices/notices.component';
import { OrganizationDescription } from 'src/app/Components/organization-description/organization-description.component';
import { NoticesService } from 'src/app/services/notices.service';
import { OrganizationDataService } from 'src/app/services/organization-data.service';

@Component({
	selector: 'app-departments',
	templateUrl: './departments.component.html',
	styleUrls: ['./departments.component.css']
})
export class DepartmentsComponent implements OnInit {
	public notices$: Observable<Notice[]>;
	public organization$: Observable<string>;
	public organizationName$: Observable<string>;
	public organizationDescription$: Observable<OrganizationDescription>;

	constructor(
		public router: Router,
		public activatedRoute: ActivatedRoute,
		private orgDesc: OrganizationDataService,
		private noticesData: NoticesService
	) { }

	ngOnInit() {
		this.activatedRoute.url.subscribe(url => {
			const orgName = url[1].toString();
			this.notices$ = this.noticesData.fetchNotices(orgName);
			this.organizationDescription$ = this.orgDesc.fetchDescription(orgName);
		});
		this.organization$ = this.activatedRoute.url.pipe(
			map(url => {
				return url[1].toString();
			})
		);
		this.organizationName$ = this.activatedRoute.url.pipe(
			map(url => {
				return url[1].toString();
			})
		);
	}

}
