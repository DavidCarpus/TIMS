import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OrganizationDescriptionComponent } from './organization-description.component';

describe('OrganizationDescriptionComponent', () => {
  let component: OrganizationDescriptionComponent;
  let fixture: ComponentFixture<OrganizationDescriptionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OrganizationDescriptionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OrganizationDescriptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
