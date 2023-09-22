import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SyllabusDetailGeneralComponent } from './syllabus-detail-general.component';

describe('SyllabusDetailGeneralComponent', () => {
  let component: SyllabusDetailGeneralComponent;
  let fixture: ComponentFixture<SyllabusDetailGeneralComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SyllabusDetailGeneralComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SyllabusDetailGeneralComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
