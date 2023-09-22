import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateTrainingProgramGeneralComponent } from './create-training-program-general.component';

describe('CreateTrainingProgramGeneralComponent', () => {
  let component: CreateTrainingProgramGeneralComponent;
  let fixture: ComponentFixture<CreateTrainingProgramGeneralComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateTrainingProgramGeneralComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreateTrainingProgramGeneralComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
