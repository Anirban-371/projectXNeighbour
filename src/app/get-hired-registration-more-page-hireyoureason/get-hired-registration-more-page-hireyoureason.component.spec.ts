import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GetHiredRegistrationMorePageHireyoureasonComponent } from './get-hired-registration-more-page-hireyoureason.component';

describe('GetHiredRegistrationMorePageHireyoureasonComponent', () => {
  let component: GetHiredRegistrationMorePageHireyoureasonComponent;
  let fixture: ComponentFixture<GetHiredRegistrationMorePageHireyoureasonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GetHiredRegistrationMorePageHireyoureasonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GetHiredRegistrationMorePageHireyoureasonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
