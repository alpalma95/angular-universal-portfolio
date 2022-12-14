import { Component, DoCheck, OnInit } from '@angular/core';
import {
  FormGroup,
  FormControl,
  FormBuilder,
  Validators,
} from '@angular/forms';
import { User } from '../../interfaces/user.interface';

import { UserService } from '../../services/user.service';
import { Operation } from '../../types/operation';
import { PasswordMatch } from '../../validators/password.validator';
import { tap } from 'rxjs';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss'],
})
export class FormComponent implements OnInit {
  countryOptions: string[] = ['Ireland', 'Australia', 'Spain', 'Guatemala'];

  userToUpdate: User = {
    id: 0,
    username: '',
    password: '',
    passwordConfirm: '',
    email: '',
    subscribe: false,
    country: '',
    city: '',
  };
  operationType: Operation = 'create';

  userForm: FormGroup = this.fb.group(
    {
      username: ['', [Validators.required, Validators.minLength(4)]],
      password: ['', [Validators.required, Validators.minLength(8)]],
      passwordConfirm: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      subscribe: [false],
      country: ['', Validators.required],
      city: ['', Validators.minLength(3)],
    },
    {
      validator: PasswordMatch('password', 'passwordConfirm'),
    }
  );

  constructor(private fb: FormBuilder, private us: UserService) {}

  ngOnInit(): void {
    this.us.userToUpdate$.subscribe((user) => (this.userToUpdate = user));
    this.us.operationType$
      .pipe(
        tap((val) => {
          if (val === 'update') {
            this.userForm.setValue({
              username: this.userToUpdate.username,
              password: this.userToUpdate.password,
              passwordConfirm: this.userToUpdate.passwordConfirm,
              email: this.userToUpdate.email,
              subscribe: this.userToUpdate.subscribe,
              country: this.userToUpdate.country,
              city: this.userToUpdate.city,
            });
          }
        })
      )
      .subscribe((type) => (this.operationType = type));
  }

  inputIsValid(field: string): any {
    return (
      this.userForm.controls[field].errors &&
      this.userForm.controls[field].touched
    );
  }

  renderError(field: string): string {
    const errors = this.userForm.controls[field].errors;

    if (errors?.hasOwnProperty('required')) return 'is required!';
    if (errors?.hasOwnProperty('minlength'))
      return `must be at least ${errors['minlength'].requiredLength} characters long!`;
    if (errors?.hasOwnProperty('email')) return 'is not a valid format!';
    if (errors?.hasOwnProperty('passwordMatch'))
      return 'and password must match!';

    return '';
  }

  addUser(): void {
    this.us.addUser({ id: Date.now(), ...this.userForm.value });
    this.userForm.reset();
  }

  updateUser(): void {
    this.us.updateUser({
      id: this.userToUpdate.id,
      ...this.userForm.value,
    });
    this.userForm.reset();
  }

  createOrUpdateUser(): void {
    if (this.userForm.invalid) {
      this.userForm.markAllAsTouched();
      return;
    }

    if (this.operationType === 'create') this.addUser();
    if (this.operationType === 'update') this.updateUser();
  }
}
