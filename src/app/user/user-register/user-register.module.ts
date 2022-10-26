import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserRegisterRoutingModule } from './user-register-routing.module';
import { UserRegisterFormComponent } from './user-register-form/user-register-form.component';
import { UserLoginFormComponent } from './user-login-form/user-login-form.component';


@NgModule({
  declarations: [
    UserRegisterFormComponent,
    UserLoginFormComponent
  ],
  imports: [
    CommonModule,
    UserRegisterRoutingModule
  ]
})
export class UserRegisterModule { }
