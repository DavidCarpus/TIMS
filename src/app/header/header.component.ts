import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { HttpClient } from '@angular/common/http';
import { Component, Input, ViewChild } from '@angular/core';
import { MatMenuTrigger } from '@angular/material';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { NavItem } from './nav-item';

// https://stackblitz.com/edit/dynamic-nested-topnav-menu
// https://candordeveloper.com/2017/04/25/how-to-create-dynamic-menu-and-page-title-with-angular-material-and-cli/

@Component({
	selector: 'app-header',
	templateUrl: './header.component.html',
	styleUrls: ['./header.component.css'],
})
export class HeaderComponent {
	@Input() title: string;
	@ViewChild(MatMenuTrigger) trigger: MatMenuTrigger;
	menuVisible = true;

	public navItems: Observable<NavItem[]>;

	isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
		.pipe(
			map(result => result.matches)
		);

	constructor(
		private http: HttpClient, private breakpointObserver: BreakpointObserver
	) {
		this.navItems = this.getMenus$();
	}

	getMenus$() {
		return this.http.get<NavItem[]>('assets/mocks/menu.json');
	}

	toggleMenu() {
		this.menuVisible = !this.menuVisible;
	}

}
