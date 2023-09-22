import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateClassAddNameComponent } from './create-class-add-name.component';

describe('CreateClassAddNameComponent', () => {
  let component: CreateClassAddNameComponent;
  let fixture: ComponentFixture<CreateClassAddNameComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateClassAddNameComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreateClassAddNameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
