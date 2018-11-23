import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AgendasAndMinutesComponent } from './agendas-and-minutes.component';

describe('AgendasAndMinutesComponent', () => {
	let component: AgendasAndMinutesComponent;
	let fixture: ComponentFixture<AgendasAndMinutesComponent>;

	beforeEach(async(() => {
		TestBed.configureTestingModule({
			declarations: [AgendasAndMinutesComponent]
		})
			.compileComponents();
	}));

	beforeEach(() => {
		fixture = TestBed.createComponent(AgendasAndMinutesComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
