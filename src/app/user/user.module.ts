import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserRoutingModule } from './user-routing.module';
import { UserLoginComponent } from './user-login/user-login.component';
import { UserRegisterComponent } from './user-register/user-register.component';
import { UserLoginFormComponent } from './user-login-form/user-login-form.component';
import { UserRegisterFormComponent } from './user-register-form/user-register-form.component';


@NgModule({
  declarations: [
    UserLoginComponent,
    UserRegisterComponent,
    UserLoginFormComponent,
    UserRegisterFormComponent
  ],
  imports: [
    CommonModule,
    UserRoutingModule
  ]
})
export class UserModule { }
