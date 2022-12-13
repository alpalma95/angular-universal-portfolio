import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SecretViewComponent } from './components/secret-view/secret-view.component';
import { LoginFormComponent } from './components/login-form/login-form.component';
import { SignupFormComponent } from './components/signup-form/signup-form.component';
import { SecretComponent } from './components/secret/secret.component';
import { AuthGuard } from './guards/auth.guard';
import { LoginGuard } from './guards/login.guard';

const routes: Routes = [
  {
    path: '',
    component: SecretViewComponent,
    children: [
      {
        path: 'login',
        component: LoginFormComponent,
        canActivate: [LoginGuard],
      },
      {
        path: 'signup',
        component: SignupFormComponent,
        canActivate: [LoginGuard],
      },
      {
        path: 'secret',
        component: SecretComponent,
        canActivate: [AuthGuard],
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SecretRoutingModule {}
