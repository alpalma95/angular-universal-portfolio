import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss', '../../../styles/skeleton.scss'],
})
export class LoginFormComponent implements OnInit {
  loginForm: FormGroup = this.fb.group({
    email: ['', [Validators.required]],
    password: ['', [Validators.required]],
  });

  constructor(private fb: FormBuilder, private authService: AuthService) {}

  ngOnInit(): void {}

  login() {
    this.authService
      .login(this.loginForm.value)
      .subscribe((res) => console.log(res));

    this.loginForm.reset();
  }
}
