import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
	selector: 'app-committees',
	templateUrl: './boards-and-committees.component.html',
	styleUrls: ['./boards-and-committees.component.css']
})
export class BoardsAndCommitteesComponent {

	constructor(public router: Router, public activatedRoute: ActivatedRoute) { }

}
