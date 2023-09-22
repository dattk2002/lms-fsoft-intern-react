import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IndentifyMailComponent } from './indentify-mail.component';

describe('IndentifyMailComponent', () => {
  let component: IndentifyMailComponent;
  let fixture: ComponentFixture<IndentifyMailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IndentifyMailComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IndentifyMailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
