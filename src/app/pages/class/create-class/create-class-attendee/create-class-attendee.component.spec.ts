import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateClassAttendeeComponent } from './create-class-attendee.component';

describe('CreateClassAttendeeComponent', () => {
  let component: CreateClassAttendeeComponent;
  let fixture: ComponentFixture<CreateClassAttendeeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateClassAttendeeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreateClassAttendeeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
