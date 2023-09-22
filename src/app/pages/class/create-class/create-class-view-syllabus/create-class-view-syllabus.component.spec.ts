import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateClassViewSyllabusComponent } from './create-class-view-syllabus.component';

describe('CreateClassViewSyllabusComponent', () => {
  let component: CreateClassViewSyllabusComponent;
  let fixture: ComponentFixture<CreateClassViewSyllabusComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateClassViewSyllabusComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreateClassViewSyllabusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
