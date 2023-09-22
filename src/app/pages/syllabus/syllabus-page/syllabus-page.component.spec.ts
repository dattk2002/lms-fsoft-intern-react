import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SyllabusPageComponent } from './syllabus-page.component';

describe('SyllabusPageComponent', () => {
  let component: SyllabusPageComponent;
  let fixture: ComponentFixture<SyllabusPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SyllabusPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SyllabusPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
