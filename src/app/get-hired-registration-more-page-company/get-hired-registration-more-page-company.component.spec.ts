import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GetHiredRegistrationMorePageCompanyComponent } from './get-hired-registration-more-page-company.component';

describe('GetHiredRegistrationMorePageCompanyComponent', () => {
  let component: GetHiredRegistrationMorePageCompanyComponent;
  let fixture: ComponentFixture<GetHiredRegistrationMorePageCompanyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GetHiredRegistrationMorePageCompanyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GetHiredRegistrationMorePageCompanyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
