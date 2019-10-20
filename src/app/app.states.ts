import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { UIRouterModule } from "@uirouter/angular";
//import {$ocLazyLoad} from "oclazyload";

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
export const APP_STATES = [
  {
    name: 'app',
    //abstract: true,
    views: {
      "header": { component: HeaderComponent },
      "footer": { component: FooterComponent },
    }
  },
  {
    name: 'app.login.**',
    url: '/admins/login',
    loadChildren: './login/login.module#LoginModule'
  },
  {
    name: 'app.home.**',
    url: '/admins/home',
    loadChildren: './home/home.module#HomeModule'
  },
  {
    name: 'app.school.**',
    url: '/admins/school',
    loadChildren: './school/school.module#SchoolModule'
  },
  {
    name: 'app.class.**',
    url: '/admins/class',
    loadChildren: './class/class.module#ClassModule'
  },
  {
    name: 'app.subject.**',
    url: '/admins/subject',
    loadChildren: './subject/subject.module#SubjectModule'
  },
  {
    name: 'app.assign-school.**',
    url: '/admins/assign-school',
    loadChildren: './assign-school/assign-school.module#AssignSchoolModule'
  },
  // {
  //   name: 'app.user.**',
  //   url: '/admin/user',
  //   loadChildren: './user/user.module#UserModule'
  // },
  // {
  //   name: 'app.massager.**',
  //   url: '/admin/massager',
  //   loadChildren: './massager/massager.module#MassagerModule'
  // },
  // {
  //   name: 'app.testimonial.**',
  //   url: '/admin/testimonial',
  //   loadChildren: './testimonial/testimonial.module#TestimonialModule'
  // },
  // { path: '',
  //   redirectTo: '/',
  //   pathMatch: 'full'
  // }
];