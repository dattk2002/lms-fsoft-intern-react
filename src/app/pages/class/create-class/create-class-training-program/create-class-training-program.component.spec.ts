import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateClassTrainingProgramComponent } from './create-class-training-program.component';

describe('CreateClassTrainingProgramComponent', () => {
  let component: CreateClassTrainingProgramComponent;
  let fixture: ComponentFixture<CreateClassTrainingProgramComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateClassTrainingProgramComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreateClassTrainingProgramComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
