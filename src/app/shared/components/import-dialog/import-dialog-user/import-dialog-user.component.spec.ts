import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImportDialogUserComponent } from './import-dialog-user.component';

describe('ImportDialogUserComponent', () => {
  let component: ImportDialogUserComponent;
  let fixture: ComponentFixture<ImportDialogUserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ImportDialogUserComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ImportDialogUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
