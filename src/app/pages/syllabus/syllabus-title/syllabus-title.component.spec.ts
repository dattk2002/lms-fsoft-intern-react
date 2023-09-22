import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SyllabusTitleComponent } from './syllabus-title.component';

describe('SyllabusTitleComponent', () => {
  let component: SyllabusTitleComponent;
  let fixture: ComponentFixture<SyllabusTitleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SyllabusTitleComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SyllabusTitleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
