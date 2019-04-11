import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GetHiredRegistrationMoreComponent } from './get-hired-registration-more.component';

describe('GetHiredRegistrationMoreComponent', () => {
  let component: GetHiredRegistrationMoreComponent;
  let fixture: ComponentFixture<GetHiredRegistrationMoreComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GetHiredRegistrationMoreComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GetHiredRegistrationMoreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
