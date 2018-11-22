import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { MenuItemComponent } from './header/menu-item/menu-item.component';
import { MainBodyComponent } from './main-body/main-body.component';
import { MaterialModule } from './material.module';
import { AboutComponent } from './Pages/about/about.component';
import { CommitteesComponent } from './Pages/committees/committees.component';
import { DepartmentComponent } from './Pages/department/department.component';
import { DepartmentsComponent } from './Pages/departments/departments.component';
import { HomeComponent } from './Pages/home/home.component';
import { PublicRecordsComponent } from './Pages/public-records/public-records.component';

const appRoutes: Routes = [
	{ path: '', redirectTo: 'home', pathMatch: 'full' },
	{ path: 'Departments', component: DepartmentComponent },
	{ path: 'home', component: HomeComponent },
	{ path: 'Committees', component: CommitteesComponent },
	{ path: 'About', component: AboutComponent },
	{ path: 'PublicRecords', component: PublicRecordsComponent },
];

@NgModule({
	declarations: [
		AppComponent,
		HeaderComponent,
		FooterComponent,
		MainBodyComponent,
		DepartmentComponent,
		HomeComponent,
		MenuItemComponent,
		CommitteesComponent,
		AboutComponent,
		DepartmentsComponent,
		PublicRecordsComponent
	],
	imports: [
		BrowserModule,
		BrowserAnimationsModule,
		HttpClientModule,
		FormsModule,
		RouterModule.forRoot(appRoutes),
		MaterialModule,
	],
	providers: [],
	bootstrap: [AppComponent]
})
export class AppModule { }
