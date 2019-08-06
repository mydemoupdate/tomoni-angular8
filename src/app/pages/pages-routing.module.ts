import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PagesComponent } from './pages.component';
import { ContentComponent } from './content/content.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { AccountComponent } from './account/account.component';



const adminRoutes: Routes = [
  {
    path: '',
    component: PagesComponent,
    children: [
      {
        path: '',
        children: [
          { path: '', component: ContentComponent },
          { path: 'sign-in', component: SignInComponent  },
          { path: 'sign-up', component: SignUpComponent  },
          { path: 'account', component: AccountComponent  },
        ]
      }
    ]
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(adminRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class PagesRoutingModule {}


/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/