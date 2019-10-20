import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SchoolComponent } from './school.component';
import { FormSchoolComponent } from './form-school.component';
import { UIRouterModule } from "@uirouter/angular";
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgxPaginationModule } from 'ngx-pagination';

import { Ng2StateDeclaration, Transition } from "@uirouter/angular";

import { EmptyModule } from '../empty/empty.module';
import { EmptyComponent } from '../empty/empty.component';

let APP_SUB_STATES: Ng2StateDeclaration[] = [
  // A state for the 'app.contact' submodule.
  {
    name: "app.school",
    url: "/admins/school",
    views: {
      "content@": { component: SchoolComponent },
    },
  },
  {
    name: "app.school-add",
    url: "/admins/school/add",
    views: {
      "content@": { component: FormSchoolComponent },
    },
  },
  {
    name: "app.school-update",
    url: "/admins/school/update/:id",
    views: {
      "content@": { component: FormSchoolComponent },
    },
  }
];

@NgModule({
  declarations: [SchoolComponent, FormSchoolComponent],
  imports: [
    CommonModule,
    EmptyModule,
    FormsModule,
    ReactiveFormsModule,
    UIRouterModule.forChild({ states: APP_SUB_STATES }),
    NgxPaginationModule
  ]
})
export class SchoolModule { }
