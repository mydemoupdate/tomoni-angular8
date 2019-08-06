import { NgModule }       from '@angular/core';
import { CommonModule }   from '@angular/common';
import { PagesRoutingModule } from './pages-routing.module';
import { PagesComponent } from './pages.component';
import { ContentComponent } from './content/content.component';
import { PagesHeaderComponent } from './pages-header/pages-header.component';
import { PagesFooterComponent } from './pages-footer/pages-footer.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { AccountComponent } from './account/account.component';


@NgModule({
  imports: [
    CommonModule,
    PagesRoutingModule
  ],
  declarations: [
    PagesComponent,
    ContentComponent,
    PagesHeaderComponent,
    PagesFooterComponent,
    SignInComponent,
    SignUpComponent,
    AccountComponent
  ]
})
export class PageModule {}


