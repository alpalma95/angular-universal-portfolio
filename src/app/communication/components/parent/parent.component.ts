import { Component, OnInit } from '@angular/core';
import { MyServiceService } from '../../services/my-service.service';
import { ObservablesService } from '../../services/observables.service';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.scss'],
})
export class ParentComponent implements OnInit {
  message: string = '';
  messageFromChild: string = '';
  messageChildObservable: string = '';

  constructor(
    private service: MyServiceService,
    private obs: ObservablesService
  ) {}

  get parentMessage(): string {
    return this.service.parentMessage;
  }

  ngOnInit(): void {
    this.obs.messageFromChild.subscribe(
      (value: any) => (this.messageChildObservable = value)
    );
  }

  setMessage(): void {
    this.message = 'parent is using input property';
    this.service.setChildMessage('');
  }
  setMessageFromChild(value: string): void {
    this.messageFromChild = value;
  }
  setMessageFromService(): void {
    this.service.setChildMessage('parent is using services');
    this.message = '';
  }
  setMessageObservable(): void {
    this.obs.setMessageFromParent('Parent is using observables');
    this.service.setChildMessage('');
    this.message = '';
  }
}
