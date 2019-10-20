import { BrowserModule } from '@angular/platform-browser';
import { NgModule, NgModuleFactoryLoader, SystemJsNgModuleLoader } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { UIRouterModule } from "@uirouter/angular";
import { APP_STATES } from './app.states';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';

import { CommonService } from './common.service';
import { CookieService } from 'ngx-cookie-service';
import { ClassService } from './services/class/class.service';
import { SubjectService } from './services/subject/subject.service';
import { SchoolService } from './services/school/school.service';
import { AssignSchoolService } from './services/assign-school/assign-school.service';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { NgxPaginationModule } from 'ngx-pagination';

import { httpInterceptorProviders } from './http-interceptors/index';
import { from } from 'rxjs/observable/from';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    UIRouterModule.forRoot({ states: APP_STATES, useHash: false, otherwise: { state: 'app.login' } }),
    BrowserAnimationsModule, // required animations module
    ToastrModule.forRoot({ timeOut: 1000, positionClass: 'toast-bottom-right' }),
    NgxPaginationModule
  ],
  providers: [
    { provide: NgModuleFactoryLoader, useClass: SystemJsNgModuleLoader },
    CommonService,
    CookieService,
    httpInterceptorProviders,
    ClassService,
    SubjectService,
    SchoolService,
    AssignSchoolService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }