import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ServiceDesciptionsComponent } from './service-desciptions.component';

describe('ServiceDesciptionsComponent', () => {
  let component: ServiceDesciptionsComponent;
  let fixture: ComponentFixture<ServiceDesciptionsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ServiceDesciptionsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ServiceDesciptionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
