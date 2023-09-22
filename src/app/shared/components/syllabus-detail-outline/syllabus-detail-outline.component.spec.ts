import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SyllabusDetailOutlineComponent } from './syllabus-detail-outline.component';

describe('SyllabusDetailOutlineComponent', () => {
  let component: SyllabusDetailOutlineComponent;
  let fixture: ComponentFixture<SyllabusDetailOutlineComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SyllabusDetailOutlineComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SyllabusDetailOutlineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
