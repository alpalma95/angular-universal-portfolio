import { Component, OnInit } from '@angular/core';
import { tap } from 'rxjs';
import { EmailService } from '../../../landing-page/services/email.service';

@Component({
  selector: 'app-message-prompt',
  templateUrl: './message-prompt.component.html',
  styleUrls: ['./message-prompt.component.scss'],
})
export class MessagePromptComponent implements OnInit {
  messages: string[] = [];
  showPrompt: boolean = false;
  isError: boolean = false;
  isSuccess: boolean = false;

  constructor(private es: EmailService) {}

  ngOnInit(): void {
    this.es.showPrompt$.subscribe((val) => (this.showPrompt = val));
    this.es.errorMessages$
      // .pipe(tap(() => (this.showPrompt = true)))
      .subscribe((val) => (this.messages = val));
    this.es.isError$
      // .pipe(tap(() => (this.showPrompt = true)))
      .subscribe((val) => {
        this.isError = val;
      });
    this.es.isSuccess$
      // .pipe(tap(() => (this.showPrompt = true)))
      .subscribe((val) => (this.isSuccess = val));
  }

  closeMessagePrompt(): void {
    this.es.closePrompt();
  }
}
