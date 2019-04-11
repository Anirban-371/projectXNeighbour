import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GetHiredRegistrationMorePage1Component } from './get-hired-registration-more-page1.component';

describe('GetHiredRegistrationMorePage1Component', () => {
  let component: GetHiredRegistrationMorePage1Component;
  let fixture: ComponentFixture<GetHiredRegistrationMorePage1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GetHiredRegistrationMorePage1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GetHiredRegistrationMorePage1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
