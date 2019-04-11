import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GetHiredRegistrationMorePagePricingComponent } from './get-hired-registration-more-page-pricing.component';

describe('GetHiredRegistrationMorePagePricingComponent', () => {
  let component: GetHiredRegistrationMorePagePricingComponent;
  let fixture: ComponentFixture<GetHiredRegistrationMorePagePricingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GetHiredRegistrationMorePagePricingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GetHiredRegistrationMorePagePricingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
