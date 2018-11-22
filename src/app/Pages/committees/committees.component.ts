import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
	selector: 'app-committees',
	templateUrl: './committees.component.html',
	styleUrls: ['./committees.component.css']
})
export class CommitteesComponent {

	constructor(public router: Router, public activatedRoute: ActivatedRoute) { }

}
