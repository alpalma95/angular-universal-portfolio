import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  @Output() toggleVisibility: EventEmitter<boolean> =
    new EventEmitter<boolean>();
  @Input() isVisible?: boolean;

  constructor() {}

  ngOnInit(): void {}

  emitToggleVisibility(): void {
    this.toggleVisibility.emit(!this.isVisible);
  }
}
