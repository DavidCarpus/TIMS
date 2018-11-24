import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable, of } from 'rxjs';
import { Notice } from 'src/app/Components/notices/notices.component';
import { OrganizationDescription } from 'src/app/Components/organization-description/organization-description.component';
import { NoticesService } from 'src/app/services/notices.service';

@Component({
	selector: 'app-committees',
	templateUrl: './boards-and-committees.component.html',
	styleUrls: ['./boards-and-committees.component.css']
})
export class BoardsAndCommitteesComponent implements OnInit {
	public notices$: Observable<Notice[]>;
	public organizationName: string;
	public organizationDescription$: Observable<OrganizationDescription>;

	constructor(
		public router: Router,
		public activatedRoute: ActivatedRoute,
		private noticesData: NoticesService) { }

	ngOnInit() {
		this.activatedRoute.url.subscribe(url => {
			const orgName = url[1].toString();
			this.notices$ = this.noticesData.fetchNotices(orgName);
			if (orgName === 'BudgetCommittee') {
				this.organizationDescription$ = of({ organization: orgName, description: 'Some Desc' });
			} else {
				this.organizationDescription$ = of(null);
			}

			this.organizationName = orgName;
		});
	}

}
