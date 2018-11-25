import { Component, Input, OnChanges } from '@angular/core';
import { Observable } from 'rxjs';
import { MeetingRecord, PublicRecordDataService } from 'src/app/services/public-record-data.service';

@Component({
	selector: 'app-agendas-and-minutes',
	templateUrl: './agendas-and-minutes.component.html',
	styleUrls: ['./agendas-and-minutes.component.css']
})
export class AgendasAndMinutesComponent implements OnChanges {
	@Input() organizationName: string;

	public documents$: Observable<MeetingRecord[]>;

	constructor(
		private documentService: PublicRecordDataService
	) { }

	ngOnChanges(changes) {
		if (changes.organizationName) {
			this.documents$ = this.documentService.fetchMinutesAndAgendas(this.organizationName);
		}
	}

}
