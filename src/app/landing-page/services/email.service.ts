import { Injectable } from '@angular/core';
import { EmailData } from '../interfaces/emailData.interface';
import { Subject, BehaviorSubject } from 'rxjs';
import { FormGroup } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class EmailService {
  private _emailFormData: Subject<EmailData> = new Subject<EmailData>();
  private _errorMessages: BehaviorSubject<string[]> = new BehaviorSubject<
    string[]
  >([]);
  private _isError: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(
    false
  );
  private _isSuccess: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(
    false
  );

  private _showPrompt: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(
    false
  );

  public errorMessages$ = this._errorMessages.asObservable();
  public isError$ = this._isError.asObservable();
  public isSuccess$ = this._isSuccess.asObservable();
  public showPrompt$ = this._showPrompt.asObservable();

  constructor(private http: HttpClient) {
    this._emailFormData.subscribe((val) => console.log(val));
  }

  public setEmailFormData(data: EmailData): void {
    this._emailFormData.next(data);
  }

  public closePrompt(): void {
    this._errorMessages.next([]);
    this._showPrompt.next(false);
    this._isSuccess.next(false);
  }

  public detectError(form: FormGroup): void {
    if (form.valid) {
      this._showPrompt.next(true);
      this._isSuccess.next(true);
      this._errorMessages.next([]);
    }

    if (form.controls['name'].errors?.hasOwnProperty('required')) {
      this._showPrompt.next(true);
      this._isError.next(true);
      this._errorMessages.next([
        ...this._errorMessages.value,
        'Please indicate your name',
      ]);
    }

    if (form.controls['email'].errors?.hasOwnProperty('required')) {
      this._showPrompt.next(true);
      this._isError.next(true);
      this._errorMessages.next([
        ...this._errorMessages.value,
        'Please indicate your email',
      ]);
    }

    if (form.controls['email'].errors?.hasOwnProperty('email')) {
      this._showPrompt.next(true);
      this._isError.next(true);
      this._errorMessages.next([
        ...this._errorMessages.value,
        'Please introduce a valid email',
      ]);
    }

    if (form.controls['text'].errors?.hasOwnProperty('required')) {
      this._showPrompt.next(true);
      this._isError.next(true);
      this._errorMessages.next([
        ...this._errorMessages.value,
        'The message cannot be empty',
      ]);
    }
  }
}
