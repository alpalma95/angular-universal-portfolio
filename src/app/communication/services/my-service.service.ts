import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class MyServiceService {
  private _parentMessage: string = '';
  private _childMessage: string = '';

  get parentMessage(): string {
    return this._parentMessage;
  }

  get childMessage(): string {
    return this._childMessage;
  }

  setParentMessage(msg: string): void {
    this._parentMessage = msg;
  }

  setChildMessage(msg: string): void {
    this._childMessage = msg;
  }
}
