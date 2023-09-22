import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClassHeaderComponent } from './class-header.component';

describe('ClassHeaderComponent', () => {
  let component: ClassHeaderComponent;
  let fixture: ComponentFixture<ClassHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ClassHeaderComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ClassHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
