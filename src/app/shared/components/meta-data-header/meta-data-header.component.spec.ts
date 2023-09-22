import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MetaDataHeaderComponent } from './meta-data-header.component';

describe('MetaDataHeaderComponent', () => {
  let component: MetaDataHeaderComponent;
  let fixture: ComponentFixture<MetaDataHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MetaDataHeaderComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MetaDataHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
