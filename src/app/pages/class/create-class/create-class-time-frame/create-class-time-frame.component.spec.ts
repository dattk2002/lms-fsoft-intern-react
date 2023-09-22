import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateClassTimeFrameComponent } from './create-class-time-frame.component';

describe('CreateClassTimeFrameComponent', () => {
  let component: CreateClassTimeFrameComponent;
  let fixture: ComponentFixture<CreateClassTimeFrameComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateClassTimeFrameComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreateClassTimeFrameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
