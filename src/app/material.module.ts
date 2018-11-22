import { NgModule } from '@angular/core';
import {
  MatButtonModule,
  MatCardModule,
  MatIconModule,
  MatMenuModule,
  MatSidenavModule,
  MatToolbarModule,
} from '@angular/material';

@NgModule({
	imports: [
		MatButtonModule,
		MatCardModule,
		MatIconModule,
		MatMenuModule,
		MatSidenavModule,
		MatToolbarModule,
	],
	exports: [
		MatButtonModule,
		MatCardModule,
		MatIconModule,
		MatMenuModule,
		MatSidenavModule,
		MatToolbarModule,
	]
})
export class MaterialModule { }
