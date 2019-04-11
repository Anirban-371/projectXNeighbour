import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HireTimeComponent } from './hire-time.component';

describe('HireTimeComponent', () => {
  let component: HireTimeComponent;
  let fixture: ComponentFixture<HireTimeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HireTimeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HireTimeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
