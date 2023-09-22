import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateSyllabusOthersComponent } from './create-syllabus-others.component';

describe('CreateSyllabusOthersComponent', () => {
  let component: CreateSyllabusOthersComponent;
  let fixture: ComponentFixture<CreateSyllabusOthersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateSyllabusOthersComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreateSyllabusOthersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
