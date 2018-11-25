import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Notice } from 'src/app/Components/notices/notices.component';
import { OrganizationDescription } from 'src/app/Components/organization-description/organization-description.component';
import { OrganizationDataService } from 'src/app/services/organization-data.service';
import { PublicRecordDataService } from 'src/app/services/public-record-data.service';

@Component({
	selector: 'app-committees',
	templateUrl: './boards-and-committees.component.html',
	styleUrls: ['./boards-and-committees.component.css']
})
export class BoardsAndCommitteesComponent implements OnInit {
	public notices$: Observable<Notice[]>;
	public organizationName$: Observable<string>;
	public organizationDescription$: Observable<OrganizationDescription>;

	constructor(
		public router: Router,
		public activatedRoute: ActivatedRoute,
		private publicRecordData: PublicRecordDataService,
		private orgDesc: OrganizationDataService,
	) { }

	ngOnInit() {
		this.activatedRoute.url.subscribe(url => {
			const orgName = url[1].toString();
			this.notices$ = this.publicRecordData.fetchNotices(orgName);
			this.organizationDescription$ = this.orgDesc.fetchDescription(orgName);
		});
		this.organizationName$ = this.activatedRoute.url.pipe(
			map(url => {
				return url[1].toString();
			})
		);
	}

}
