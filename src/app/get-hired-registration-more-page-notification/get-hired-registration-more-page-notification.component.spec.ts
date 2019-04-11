import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GetHiredRegistrationMorePageNotificationComponent } from './get-hired-registration-more-page-notification.component';

describe('GetHiredRegistrationMorePageNotificationComponent', () => {
  let component: GetHiredRegistrationMorePageNotificationComponent;
  let fixture: ComponentFixture<GetHiredRegistrationMorePageNotificationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GetHiredRegistrationMorePageNotificationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GetHiredRegistrationMorePageNotificationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
