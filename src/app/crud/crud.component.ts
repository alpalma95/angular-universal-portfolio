import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './crud.component.html',
  encapsulation: ViewEncapsulation.ShadowDom,
  styleUrls: ['./crud.component.scss'],
})
export class CrudComponent {
  title = '03_CRUD';
}
