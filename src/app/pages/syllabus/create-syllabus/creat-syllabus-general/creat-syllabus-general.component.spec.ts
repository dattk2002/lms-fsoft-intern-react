import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreatSyllabusGeneralComponent } from './creat-syllabus-general.component';

describe('CreatSyllabusGeneralComponent', () => {
  let component: CreatSyllabusGeneralComponent;
  let fixture: ComponentFixture<CreatSyllabusGeneralComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreatSyllabusGeneralComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreatSyllabusGeneralComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
