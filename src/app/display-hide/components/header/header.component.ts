import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ApiService } from '../../../api/api.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  @Output() toggleVisibility: EventEmitter<boolean> =
    new EventEmitter<boolean>();
  @Input() isVisible?: boolean;

  constructor(private api: ApiService) {}

  ngOnInit(): void {
    this.api.data.subscribe((data) => console.log(data));
  }

  emitToggleVisibility(): void {
    this.toggleVisibility.emit(!this.isVisible);
  }
}
