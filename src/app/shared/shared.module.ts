import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './components/navbar/navbar.component';
import { RouterModule } from '@angular/router';
import { MessagePromptComponent } from './components/message-prompt/message-prompt.component';

@NgModule({
  declarations: [NavbarComponent, MessagePromptComponent],
  exports: [NavbarComponent, MessagePromptComponent],
  imports: [CommonModule, RouterModule],
})
export class SharedModule {}
