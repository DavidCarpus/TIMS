import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'app-main-body',
	templateUrl: './main-body.component.html',
	styleUrls: ['./main-body.component.css']
})
export class MainBodyComponent implements OnInit {
	// shouldRun = [/(^|\.)plnkr\.co$/, /(^|\.)stackblitz\.io$/].some(h => h.test(window.location.host));
	shouldRun = true;
	constructor() { }

	ngOnInit() {
	}
}
