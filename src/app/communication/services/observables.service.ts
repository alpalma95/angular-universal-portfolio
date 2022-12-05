import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ObservablesService {
  private _messageFromChild: BehaviorSubject<string> =
    new BehaviorSubject<string>('');

  private _messageFromParent: BehaviorSubject<string> =
    new BehaviorSubject<string>('');

  messageFromChild = this._messageFromChild.asObservable();

  messageFromParent = this._messageFromParent.asObservable();

  setMessageFromchild(value: string): void {
    this._messageFromChild.next(value);
  }

  setMessageFromParent(value: string): void {
    this._messageFromParent.next(value);
  }
}
