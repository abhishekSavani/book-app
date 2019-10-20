import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AssignSchoolComponent } from './assign-school.component';
import { FormAssignSchoolComponent } from './form-assign-school.component';
import { UIRouterModule } from "@uirouter/angular";
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgxPaginationModule } from 'ngx-pagination';

import { Ng2StateDeclaration, Transition } from "@uirouter/angular";

import { EmptyModule } from '../empty/empty.module';
import { EmptyComponent } from '../empty/empty.component';

let APP_SUB_STATES: Ng2StateDeclaration[] = [
  // A state for the 'app.contact' submodule.
  {
    name: "app.assign-school",
    url: "/admins/assign-school",
    views: {
      "content@": { component: AssignSchoolComponent },
    },
  },
  {
    name: "app.assign-school-add",
    url: "/admins/assign-school/add",
    views: {
      "content@": { component: FormAssignSchoolComponent },
    },
  },
  {
    name: "app.assign-school-update",
    url: "/admins/assign-school/update/:id",
    views: {
      "content@": { component: FormAssignSchoolComponent },
    },
  }
];

@NgModule({
  declarations: [AssignSchoolComponent, FormAssignSchoolComponent],
  imports: [
    CommonModule,
    EmptyModule,
    FormsModule,
    ReactiveFormsModule,
    UIRouterModule.forChild({ states: APP_SUB_STATES }),
    NgxPaginationModule
  ]
})
export class AssignSchoolModule { }
