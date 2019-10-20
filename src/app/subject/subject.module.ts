import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SubjectComponent } from './subject.component';
import { FormSubjectComponent } from './form-subject.component';
import { UIRouterModule } from "@uirouter/angular";
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgxPaginationModule } from 'ngx-pagination';

import { Ng2StateDeclaration, Transition } from "@uirouter/angular";

import { EmptyModule } from '../empty/empty.module';
import { EmptyComponent } from '../empty/empty.component';

let APP_SUB_STATES: Ng2StateDeclaration[] = [
  // A state for the 'app.contact' submodule.
  {
    name: "app.subject",
    url: "/admins/subject",
    views: {
      "content@": { component: SubjectComponent },
    },
  },
  {
    name: "app.subject-add",
    url: "/admins/subject/add",
    views: {
      "content@": { component: FormSubjectComponent },
    },
  },
  {
    name: "app.subject-update",
    url: "/admins/subject/update/:id",
    views: {
      "content@": { component: FormSubjectComponent },
    },
  }
];

@NgModule({
  declarations: [SubjectComponent, FormSubjectComponent],
  imports: [
    CommonModule,
    EmptyModule,
    FormsModule,
    ReactiveFormsModule,
    UIRouterModule.forChild({ states: APP_SUB_STATES }),
    NgxPaginationModule
  ]
})
export class SubjectModule { }
