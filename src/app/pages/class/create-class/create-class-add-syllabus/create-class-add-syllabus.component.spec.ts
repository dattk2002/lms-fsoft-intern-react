import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateClassAddSyllabusComponent } from './create-class-add-syllabus.component';

describe('CreateClassAddSyllabusComponent', () => {
  let component: CreateClassAddSyllabusComponent;
  let fixture: ComponentFixture<CreateClassAddSyllabusComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateClassAddSyllabusComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreateClassAddSyllabusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
