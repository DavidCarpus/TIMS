import { Component, Input, OnInit } from '@angular/core';

export interface Notice {
	id: number;
	description: string;
	postDate: Date;
}
@Component({
	selector: 'app-notices',
	templateUrl: './notices.component.html',
	styleUrls: ['./notices.component.css']
})
export class NoticesComponent implements OnInit {
	@Input() items: Notice[];

	constructor() { }

	ngOnInit() {
	}

}
