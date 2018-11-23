import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BoardsAndCommitteesComponent } from './boards-and-committees.component';

describe('CommitteesComponent', () => {
	let component: BoardsAndCommitteesComponent;
	let fixture: ComponentFixture<BoardsAndCommitteesComponent>;

	beforeEach(async(() => {
		TestBed.configureTestingModule({
			declarations: [BoardsAndCommitteesComponent]
		})
			.compileComponents();
	}));

	beforeEach(() => {
		fixture = TestBed.createComponent(BoardsAndCommitteesComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
