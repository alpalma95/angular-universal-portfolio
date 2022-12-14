import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-secret-view',
  templateUrl: './secret-view.component.html',
  encapsulation: ViewEncapsulation.ShadowDom,
  styleUrls: ['./secret-view.component.scss'],
})
export class SecretViewComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
