import { Component } from '@angular/core';
import { UserSerService } from './user-ser.service';

@Component({
  selector: 'app-root',
  template: `
  <h1>App Component</h1>
  <a [routerLink]="['/']">Home</a> | 
  <a [routerLink]="['users']">View Users</a>
  <router-outlet></router-outlet>
  `,
  styles: [`
    
    }
  `
  ]
})
export class AppComponent {
  constructor(private user:UserSerService){
  }
  
  
}
