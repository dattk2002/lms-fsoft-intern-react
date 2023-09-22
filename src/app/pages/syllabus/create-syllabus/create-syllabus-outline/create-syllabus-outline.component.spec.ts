import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateSyllabusOutlineComponent } from './create-syllabus-outline.component';

describe('CreateSyllabusOutlineComponent', () => {
  let component: CreateSyllabusOutlineComponent;
  let fixture: ComponentFixture<CreateSyllabusOutlineComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateSyllabusOutlineComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreateSyllabusOutlineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
