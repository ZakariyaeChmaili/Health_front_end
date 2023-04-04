import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PatientCodeDialogComponent } from './patient-code-dialog.component';

describe('PatientCodeDialogComponent', () => {
  let component: PatientCodeDialogComponent;
  let fixture: ComponentFixture<PatientCodeDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PatientCodeDialogComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PatientCodeDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
