import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-hidden-component',
  templateUrl: './hidden-component.component.html',
  styleUrls: ['./hidden-component.component.scss']
})
export class HiddenComponentComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
