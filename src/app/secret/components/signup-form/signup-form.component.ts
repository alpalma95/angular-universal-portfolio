import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { tap } from 'rxjs';

@Component({
  selector: 'app-signup-form',
  templateUrl: './signup-form.component.html',
  styleUrls: ['./signup-form.component.scss', '../../../styles/skeleton.scss'],
})
export class SignupFormComponent implements OnInit {
  signupForm: FormGroup = this.fb.group({
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required]],
    passwordConfirm: ['', [Validators.required]],
    name: [''],
    secret: ['', [Validators.required]],
  });

  constructor(
    private fb: FormBuilder,
    private auth: AuthService,
    private router: Router
  ) {}

  ngOnInit(): void {}

  signup() {
    this.auth
      .signup(this.signupForm.value)
      .subscribe(() => this.router.navigate(['login']));
    this.signupForm.reset();
  }
}
