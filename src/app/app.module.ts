import { CommonModule } from '@angular/common';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { FullCalendarModule } from '@fullcalendar/angular';

//Material
import {FileUploadModule} from 'primeng/fileupload';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoreModule } from './core-component/core.module';
import { LayoutModule } from './core-component/layout/layout.module';
import { SharedModule } from './shared/shared.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RadioButton } from 'primeng/radiobutton';
import { SelectButton } from 'primeng/selectbutton';
import {ProgressBarModule} from 'primeng/progressbar';

// import { ShareModule } from './share.module';
import { TokenInterceptor } from './core-component/interceptors/token.interceptor';
@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    CommonModule,
    HttpClientModule,
    LayoutModule,
    FormsModule,
    CoreModule,
    SharedModule,
    ReactiveFormsModule,
    FullCalendarModule,
    FileUploadModule
  ],
  exports: [],
  providers: [
    // {
    //   provide: 'SIDE_NAV_CONFIG',
    //   useValue: SIDE_NAV_MENU_ITEMS,
    // },
    // LayoutService
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptor,
      multi: true,
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
