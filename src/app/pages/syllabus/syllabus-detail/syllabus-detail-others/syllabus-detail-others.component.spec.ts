import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SyllabusDetailOthersComponent } from './syllabus-detail-others.component';

describe('SyllabusDetailOthersComponent', () => {
  let component: SyllabusDetailOthersComponent;
  let fixture: ComponentFixture<SyllabusDetailOthersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SyllabusDetailOthersComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SyllabusDetailOthersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
