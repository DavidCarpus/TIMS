import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PublicRecordsComponent } from './public-records.component';

describe('PublicRecordsComponent', () => {
  let component: PublicRecordsComponent;
  let fixture: ComponentFixture<PublicRecordsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PublicRecordsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PublicRecordsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
