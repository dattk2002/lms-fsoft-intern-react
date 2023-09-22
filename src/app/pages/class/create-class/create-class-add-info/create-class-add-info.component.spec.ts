import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateClassAddInfoComponent } from './create-class-add-info.component';

describe('CreateClassAddInfoComponent', () => {
  let component: CreateClassAddInfoComponent;
  let fixture: ComponentFixture<CreateClassAddInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateClassAddInfoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreateClassAddInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
