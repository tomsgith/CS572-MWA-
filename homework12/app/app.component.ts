import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <div>
      <app-childcomponent [counterValue]="counter" (counterChange)="counterValueChange($event)"></app-childcomponent>
    </div>
    <div>
      Component Counter Value = {{counter}}
    </div>
  `,
  styles: [`
    div { 
    display: center; 
    padding: 0;
    margin-left: 35em; 
    }
    input{
      text-align: center;
      width: 60px;
      height:15px;
    }
  `
  ]
})
export class AppComponent {
  title = 'count-app';
  counter = 0;

  counterValueChange(counterValue) {
    this.counter = counterValue;
  }
}
