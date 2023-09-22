import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListOfTrainingProgramComponent } from './list-of-training-program.component';

describe('ListOfTrainingProgramComponent', () => {
  let component: ListOfTrainingProgramComponent;
  let fixture: ComponentFixture<ListOfTrainingProgramComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListOfTrainingProgramComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListOfTrainingProgramComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
