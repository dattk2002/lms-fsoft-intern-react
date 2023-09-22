// import { ComponentFixture, TestBed } from '@angular/core/testing';

// import { TablelistComponent } from './tablelist.component';

// describe('TablelistComponent', () => {
//   let component: TablelistComponent;
//   let fixture: ComponentFixture<TablelistComponent>;

//   beforeEach(async () => {
//     await TestBed.configureTestingModule({
//       declarations: [TablelistComponent],
//     }).compileComponents();

//     fixture = TestBed.createComponent(TablelistComponent);
//     component = fixture.componentInstance;
//     fixture.detectChanges();
//   });

//   it('should create', () => {
//     expect(component).toBeTruthy();
//   });
// });

import { TestBed, async } from '@angular/core/testing';
import { TablelistComponent } from './tablelist.component';
describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [TablelistComponent],
    }).compileComponents();
  }));
  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(TablelistComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));
  it(`should have as title 'app'`, async(() => {
    const fixture = TestBed.createComponent(TablelistComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('app');
  }));
  it('should render title in a h1 tag', async(() => {
    const fixture = TestBed.createComponent(TablelistComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain(
      'Welcome to app!'
    );
  }));
});
