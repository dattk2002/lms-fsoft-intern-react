import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateClassGeneralComponent } from './create-class-general.component';

describe('CreateClassGeneralComponent', () => {
  let component: CreateClassGeneralComponent;
  let fixture: ComponentFixture<CreateClassGeneralComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateClassGeneralComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreateClassGeneralComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
