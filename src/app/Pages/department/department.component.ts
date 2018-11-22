import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
	selector: 'app-department',
	templateUrl: './department.component.html',
	styleUrls: ['./department.component.css']
})
export class DepartmentComponent {

	constructor(public router: Router, public activatedRoute: ActivatedRoute) { }

}
