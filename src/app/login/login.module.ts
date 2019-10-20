import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { LoginComponent } from './login.component';
import { UIRouterModule } from "@uirouter/angular";

import { Ng2StateDeclaration, Transition } from "@uirouter/angular";

import { EmptyModule } from '../empty/empty.module';
import { EmptyComponent } from '../empty/empty.component';

let APP_SUB_STATES: Ng2StateDeclaration[] = [
  // A state for the 'app.contact' submodule.
  {
    name: "app.login",
    url: "/admins/login",
    views: {
      "header@": { component: EmptyComponent },
      "leftMenu@": { component: EmptyComponent },
      "content@": { component: LoginComponent },
      "footer@": { component: EmptyComponent },
    },
  }
];

@NgModule({
  imports: [
    CommonModule,
    EmptyModule,
    FormsModule,
    UIRouterModule.forChild({ states: APP_SUB_STATES })
  ],
  declarations: [LoginComponent]
})
export class LoginModule { }
