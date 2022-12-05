import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { CommunicationComponent } from './communication.component';
import { ParentComponent } from './components/parent/parent.component';
import { ChildComponent } from './components/child/child.component';

@NgModule({
  declarations: [CommunicationComponent, ParentComponent, ChildComponent],
  imports: [BrowserModule],
  providers: [],
  bootstrap: [CommunicationComponent],
})
export class CommunicationModule {}
