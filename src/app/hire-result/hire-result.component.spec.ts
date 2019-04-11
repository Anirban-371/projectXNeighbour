import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HireResultComponent } from './hire-result.component';

describe('HireResultComponent', () => {
  let component: HireResultComponent;
  let fixture: ComponentFixture<HireResultComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HireResultComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HireResultComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
