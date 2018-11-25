import { Component, Input, OnChanges } from '@angular/core';
import { Observable } from 'rxjs';
import { PublicRecord, PublicRecordDataService } from 'src/app/services/public-record-data.service';

@Component({
	selector: 'app-document-list',
	templateUrl: './document-list.component.html',
	styleUrls: ['./document-list.component.css']
})
export class DocumentListComponent implements OnChanges {
	@Input() heading = 'Documentation';
	@Input() organizationName: string;

	public documents$: Observable<PublicRecord[]>;

	constructor(
		private dataservice: PublicRecordDataService
	) { }

	ngOnChanges(changes) {
		if (changes.organizationName) {
			this.documents$ = this.dataservice.fetchDocuments(this.organizationName);
		}
	}
}
