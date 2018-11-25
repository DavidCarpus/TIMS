import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

import { OrganizationDescription } from '../Components/organization-description/organization-description.component';

@Injectable({
	providedIn: 'root'
})
export class OrganizationDataService {

	constructor() { }

	fetchDescription(orgName: string): Observable<OrganizationDescription> {
		if (orgName === 'BudgetCommittee' || orgName === 'Selectmen') {
			return of({ organization: orgName, description: 'Some Desciption for ' + orgName });
		} else {
			return of(null);
		}
	}
}
