import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { tap } from 'rxjs';
import { PasswordMatch } from '../../../crud/validators/password.validator';

@Component({
  selector: 'app-signup-form',
  templateUrl: './signup-form.component.html',
  styleUrls: ['./signup-form.component.scss', '../../../styles/skeleton.scss'],
})
export class SignupFormComponent implements OnInit {
  signupForm: FormGroup = this.fb.group(
    {
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(8)]],
      passwordConfirm: ['', [Validators.required]],
      name: ['', [Validators.required]],
      secret: [''],
    },
    {
      validator: PasswordMatch('password', 'passwordConfirm'),
    }
  );

  constructor(
    private fb: FormBuilder,
    private auth: AuthService,
    private router: Router
  ) {}

  ngOnInit(): void {}

  inputIsValid(field: string): any {
    return (
      this.signupForm.controls[field].errors &&
      this.signupForm.controls[field].touched
    );
  }

  renderError(field: string): string {
    const errors = this.signupForm.controls[field].errors;

    if (errors?.hasOwnProperty('required')) return 'is required!';
    if (errors?.hasOwnProperty('minlength'))
      return `must be at least ${errors['minlength'].requiredLength} characters long!`;
    if (errors?.hasOwnProperty('email')) return 'is not a valid format!';
    if (errors?.hasOwnProperty('passwordMatch'))
      return 'and password must match!';

    return '';
  }

  signup() {
    if (this.signupForm.invalid) {
      this.signupForm.markAllAsTouched();
      return;
    }
    this.auth
      .signup(this.signupForm.value)
      .subscribe(() => this.router.navigate(['secret', 'login']));
    this.signupForm.reset();
  }
}
