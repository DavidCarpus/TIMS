import { HttpClient } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

import { NavItem } from './nav-item';

// https://stackblitz.com/edit/dynamic-nested-topnav-menu
// https://candordeveloper.com/2017/04/25/how-to-create-dynamic-menu-and-page-title-with-angular-material-and-cli/

@Component({
	selector: 'app-header',
	templateUrl: './header.component.html',
	styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
	@Input() title: string;

	public navItems: Observable<NavItem[]>;

	constructor(
		private http: HttpClient,
	) {
		this.navItems = this.getMenus$();
	}

	ngOnInit() {
	}

	getMenus$() {
		return this.http.get<NavItem[]>('assets/mocks/menu.json');
	}
}
