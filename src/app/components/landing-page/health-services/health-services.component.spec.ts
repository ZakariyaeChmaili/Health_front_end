import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HealthServicesComponent } from './health-services.component';

describe('HealthServicesComponent', () => {
  let component: HealthServicesComponent;
  let fixture: ComponentFixture<HealthServicesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HealthServicesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HealthServicesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
