import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-dump',
  template: `
    <p [ngStyle]="{'font-size':'20px'}" appMakeBigger>
      {{input.name}}
    </p>
  `,
  styles: []
})
export class DumpComponent implements OnInit {
@Input() input;
  constructor() { }

  ngOnInit() {
  }

}
