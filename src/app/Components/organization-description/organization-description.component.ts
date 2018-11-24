import { Component, Input, OnInit } from '@angular/core';

export interface OrganizationDescription {
	organization: string;
	description: string;
}

@Component({
	selector: 'app-organization-description',
	templateUrl: './organization-description.component.html',
	styleUrls: ['./organization-description.component.css']
})
export class OrganizationDescriptionComponent implements OnInit {
	@Input() data;

	constructor() { }

	ngOnInit() {
	}

}
