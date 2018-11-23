import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';
import { Notice } from 'src/app/Components/notices/notices.component';

@Component({
	selector: 'app-departments',
	templateUrl: './departments.component.html',
	styleUrls: ['./departments.component.css']
})
export class DepartmentsComponent implements OnInit {
	public notices$: BehaviorSubject<Notice[]>;

	constructor(public router: Router, public activatedRoute: ActivatedRoute) { }

	ngOnInit() {
		const now = new Date(Date.now());
		const testData: Notice[] = [
			{ id: 0, description: 'Test 1', postDate: now },
			{
				id: 1, description: 'Test 2',
				postDate: new Date((new Date(now)).setTime(now.getTime() + (1 * 60 * 60 * 1000)))
			},
			{
				id: 2, description: 'Test 3',
				postDate: new Date((new Date(now)).setTime(now.getTime() + (3 * 60 * 60 * 1000)))
			},
		];
		this.notices$ = new BehaviorSubject(testData);
	}

}
