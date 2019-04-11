import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GetHiredRegistrationComponent } from './get-hired-registration.component';

describe('GetHiredRegistrationComponent', () => {
  let component: GetHiredRegistrationComponent;
  let fixture: ComponentFixture<GetHiredRegistrationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GetHiredRegistrationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GetHiredRegistrationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
