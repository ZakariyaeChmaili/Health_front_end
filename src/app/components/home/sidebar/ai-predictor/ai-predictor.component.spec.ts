import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AiPredictorComponent } from './ai-predictor.component';

describe('AiPredictorComponent', () => {
  let component: AiPredictorComponent;
  let fixture: ComponentFixture<AiPredictorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AiPredictorComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AiPredictorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
