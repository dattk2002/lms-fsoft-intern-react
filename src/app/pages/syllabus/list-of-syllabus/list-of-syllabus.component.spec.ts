import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListOfSyllabusComponent } from './list-of-syllabus.component';

describe('ListOfSyllabusComponent', () => {
  let component: ListOfSyllabusComponent;
  let fixture: ComponentFixture<ListOfSyllabusComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListOfSyllabusComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListOfSyllabusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
