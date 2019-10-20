import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HomeComponent } from './home.component';
import { UIRouterModule } from "@uirouter/angular";

import { Ng2StateDeclaration, Transition } from "@uirouter/angular";

import { EmptyModule } from '../empty/empty.module';
import { EmptyComponent } from '../empty/empty.component';

let APP_SUB_STATES: Ng2StateDeclaration[] = [
  // A state for the 'app.contact' submodule.
  {
    name: "app.home",
    url: "/admins/home",
    views: {
      "content@": { component: HomeComponent },
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
  declarations: [HomeComponent]
})
export class HomeModule { }
