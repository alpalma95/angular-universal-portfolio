import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SecretRoutingModule } from './secret-routing.module';
import { SecretViewComponent } from './components/secret-view/secret-view.component';
import { LoginFormComponent } from './components/login-form/login-form.component';
import { SignupFormComponent } from './components/signup-form/signup-form.component';
import { SecretComponent } from './components/secret/secret.component';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    SecretViewComponent,
    LoginFormComponent,
    SignupFormComponent,
    SecretComponent,
  ],
  exports: [SecretViewComponent],
  imports: [
    CommonModule,
    SecretRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
  ],
})
export class SecretModule {}
