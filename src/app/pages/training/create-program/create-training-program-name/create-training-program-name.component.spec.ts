import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateTrainingProgramNameComponent } from './create-training-program-name.component';

describe('CreateTrainingProgramNameComponent', () => {
  let component: CreateTrainingProgramNameComponent;
  let fixture: ComponentFixture<CreateTrainingProgramNameComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateTrainingProgramNameComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreateTrainingProgramNameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
