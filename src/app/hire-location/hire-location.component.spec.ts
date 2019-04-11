import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HireLocationComponent } from './hire-location.component';

describe('HireLocationComponent', () => {
  let component: HireLocationComponent;
  let fixture: ComponentFixture<HireLocationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HireLocationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HireLocationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
