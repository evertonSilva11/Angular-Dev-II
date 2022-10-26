import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'login' },
  {
    path: 'login',
    loadChildren: () => import('./user/user-login/user-login.module').then(m => m.UserLoginModule)
  },
  {
    path: 'register',
    loadChildren: () => import('./user/user-register/user-register.module').then(m => m.UserRegisterModule)
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
