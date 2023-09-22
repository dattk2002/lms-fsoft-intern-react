import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserPermisssionComponent } from './user-permisssion.component';

describe('UserPermisssionComponent', () => {
  let component: UserPermisssionComponent;
  let fixture: ComponentFixture<UserPermisssionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserPermisssionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UserPermisssionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
