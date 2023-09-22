import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateTrainingProgramSyllabusComponent } from './create-training-program-syllabus.component';

describe('CreateTrainingProgramSyllabusComponent', () => {
  let component: CreateTrainingProgramSyllabusComponent;
  let fixture: ComponentFixture<CreateTrainingProgramSyllabusComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateTrainingProgramSyllabusComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreateTrainingProgramSyllabusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
