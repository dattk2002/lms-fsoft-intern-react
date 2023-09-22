import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrainingDetailShareComponent } from './training-detail-share.component';

describe('TrainingDetailComponent', () => {
  let component: TrainingDetailShareComponent;
  let fixture: ComponentFixture<TrainingDetailShareComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TrainingDetailShareComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TrainingDetailShareComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
