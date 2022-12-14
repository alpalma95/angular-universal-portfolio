import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss'],
})
export class LoginFormComponent implements OnInit {
  showError: boolean = false;

  loginForm: FormGroup = this.fb.group({
    email: ['', [Validators.required]],
    password: ['', [Validators.required]],
  });

  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private router: Router
  ) {}

  ngOnInit(): void {}

  login() {
    this.authService.login(this.loginForm.value).subscribe({
      next: (res) => {
        this.authService.setActiveUser(res);
        this.router.navigate(['secret', 'secret']);
      },
      error: () => (this.showError = true),
    });

    this.loginForm.reset();
  }
}
