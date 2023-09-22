import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateClassAddTrainerComponent } from './create-class-add-trainer.component';

describe('CreateClassAddTrainerComponent', () => {
  let component: CreateClassAddTrainerComponent;
  let fixture: ComponentFixture<CreateClassAddTrainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateClassAddTrainerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreateClassAddTrainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
