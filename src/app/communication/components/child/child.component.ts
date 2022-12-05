import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ObservablesService } from 'src/app/services/observables.service';
import { MyServiceService } from '../../services/my-service.service';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.scss'],
})
export class ChildComponent implements OnInit {
  @Input() messageFromParent: string = '';
  @Output() onChildSendMessage: EventEmitter<string> =
    new EventEmitter<string>();

  messageParentObservable: string = '';

  constructor(
    private service: MyServiceService,
    private obs: ObservablesService
  ) {}

  get childMessage(): string {
    return this.service.childMessage;
  }

  ngOnInit(): void {
    this.obs.messageFromParent.subscribe(
      (value) => (this.messageParentObservable = value)
    );
  }

  sendMessageOutput(): void {
    this.onChildSendMessage.emit('child is using output event');
    this.service.setParentMessage('');
  }
  setParentMessageService(): void {
    this.service.setParentMessage('child is using services');
  }
  setMessageObservable(): void {
    this.obs.setMessageFromchild('child is using observables');
    this.service.setParentMessage('');
    this.onChildSendMessage.emit('');
  }
}
