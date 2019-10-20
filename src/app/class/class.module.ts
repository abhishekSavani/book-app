import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClassComponent } from './class.component';
import { FormClassComponent } from './form-class.component';
import { UIRouterModule } from "@uirouter/angular";
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgxPaginationModule } from 'ngx-pagination';

import { Ng2StateDeclaration, Transition } from "@uirouter/angular";

import { EmptyModule } from '../empty/empty.module';
import { EmptyComponent } from '../empty/empty.component';

let APP_SUB_STATES: Ng2StateDeclaration[] = [
  // A state for the 'app.contact' submodule.
  {
    name: "app.class",
    url: "/admins/class",
    views: {
      "content@": { component: ClassComponent },
    },
  },
  {
    name: "app.class-add",
    url: "/admins/class/add",
    views: {
      "content@": { component: FormClassComponent },
    },
  },
  {
    name: "app.class-update",
    url: "/admins/class/update/:id",
    views: {
      "content@": { component: FormClassComponent },
    },
  }
];

@NgModule({
  declarations: [ClassComponent, FormClassComponent],
  imports: [
    CommonModule,
    EmptyModule,
    FormsModule,
    ReactiveFormsModule,
    UIRouterModule.forChild({ states: APP_SUB_STATES }),
    NgxPaginationModule
  ]
})
export class ClassModule { }
