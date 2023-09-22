import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateClassAddProgramComponent } from './create-class-add-program.component';

describe('CreateClassAddProgramComponent', () => {
  let component: CreateClassAddProgramComponent;
  let fixture: ComponentFixture<CreateClassAddProgramComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateClassAddProgramComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreateClassAddProgramComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
