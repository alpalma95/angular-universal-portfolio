import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { EmailService } from '../../services/email.service';

@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.scss'],
})
export class ContactFormComponent implements OnInit {
  emailForm: FormGroup = this.fb.group({
    name: ['', [Validators.required]],
    email: ['', [Validators.required, Validators.email]],
    text: ['', [Validators.required]],
  });

  showPrompt: boolean = false;

  constructor(private fb: FormBuilder, private es: EmailService) {}

  ngOnInit(): void {
    this.es.showPrompt$.subscribe((val) => (this.showPrompt = val));
  }

  sendEmail(): void {
    if (this.showPrompt) return;

    this.es.detectError(this.emailForm);
    if (this.emailForm.invalid) {
      this.emailForm.markAsTouched();
      return;
    }
    this.es.setEmailFormData(this.emailForm.value);
    this.emailForm.reset();
  }
}
