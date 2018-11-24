import { LayoutModule } from '@angular/cdk/layout';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule } from '@angular/forms';
import { MatButtonModule, MatIconModule, MatListModule, MatSidenavModule, MatToolbarModule } from '@angular/material';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule, Routes } from '@angular/router';
import { CalendarModule, DateAdapter } from 'angular-calendar';
import { adapterFactory } from 'angular-calendar/date-adapters/date-fns';

import { AppComponent } from './app.component';
import { AgendasAndMinutesComponent } from './Components/agendas-and-minutes/agendas-and-minutes.component';
import { ContactListComponent } from './Components/contact-list/contact-list.component';
import { EventCalendarComponent } from './Components/event-calendar/event-calendar.component';
import { NoticesComponent } from './Components/notices/notices.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { MenuItemComponent } from './header/menu-item/menu-item.component';
import { MainBodyComponent } from './main-body/main-body.component';
import { MaterialModule } from './material.module';
import { AboutComponent } from './Pages/about/about.component';
import { BoardsAndCommitteesComponent } from './Pages/boards-and-committees/boards-and-committees.component';
import { DepartmentsComponent } from './Pages/departments/departments.component';
import { HomeComponent } from './Pages/home/home.component';
import { PublicRecordsComponent } from './Pages/public-records/public-records.component';
import { DocumentListComponent } from './Components/document-list/document-list.component';
import { OrganizationDescriptionComponent } from './Components/organization-description/organization-description.component';

const appRoutes: Routes = [
	{ path: '', redirectTo: 'home', pathMatch: 'full' },
	{ path: 'home', component: HomeComponent },
	{ path: 'About', component: AboutComponent },
	{ path: 'BoardsAndCommittees', component: BoardsAndCommitteesComponent },
	{ path: 'Departments', component: DepartmentsComponent },
	{ path: 'PublicRecords', component: PublicRecordsComponent },
	{ path: 'BoardsAndCommittees/:committee', component: BoardsAndCommitteesComponent },
	{ path: 'Departments/:department', component: DepartmentsComponent },
	{ path: 'PublicRecords/:recordType', component: PublicRecordsComponent },
];

@NgModule({
	declarations: [
		AppComponent,
		HeaderComponent,
		FooterComponent,
		MainBodyComponent,
		HomeComponent,
		MenuItemComponent,
		BoardsAndCommitteesComponent,
		AboutComponent,
		DepartmentsComponent,
		PublicRecordsComponent,
		NoticesComponent,
		ContactListComponent,
		AgendasAndMinutesComponent,
		EventCalendarComponent,
		DocumentListComponent,
		OrganizationDescriptionComponent,
	],
	imports: [
		BrowserModule,
		BrowserAnimationsModule,
		CalendarModule.forRoot({
			provide: DateAdapter,
			useFactory: adapterFactory
		}),
		HttpClientModule,
		FormsModule,
		RouterModule.forRoot(appRoutes),
		FlexLayoutModule,
		MaterialModule,
		LayoutModule,
		MatToolbarModule,
		MatButtonModule,
		MatSidenavModule,
		MatIconModule,
		MatListModule,
	],
	providers: [],
	bootstrap: [AppComponent]
})
export class AppModule { }
