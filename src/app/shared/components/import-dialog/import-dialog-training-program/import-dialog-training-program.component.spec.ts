import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImportDialogTrainingProgramComponent } from './import-dialog-training-program.component';

describe('ImportDialogTrainingProgramComponent', () => {
  let component: ImportDialogTrainingProgramComponent;
  let fixture: ComponentFixture<ImportDialogTrainingProgramComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ImportDialogTrainingProgramComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ImportDialogTrainingProgramComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
