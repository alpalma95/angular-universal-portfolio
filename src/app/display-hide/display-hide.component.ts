import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './display-hide.component.html',
  styleUrls: ['./display-hide.component.scss'],
})
export class DisplayHide {
  componentIsVisible: boolean = false;

  toggleVisibility(event: boolean): void {
    this.componentIsVisible = event;
  }
}
