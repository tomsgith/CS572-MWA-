import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-smart',
  template: `
    <ul>
    <li *ngFor="let item of items" appIsVisible [show]=item.show>
    <app-dump [input]="item"></app-dump>
    </li>
    </ul>
  `,
  styles: []
})
export class SmartComponent implements OnInit {
  public items : Object[];
  constructor() {
    this.items = [{
      name: 'Tomas',
      show: true
    }, {
      name: 'Habteslasie',
      show: true
    }, {
      name: 'melake',
      show: false
    }];

   }

  ngOnInit() {
  }

}
