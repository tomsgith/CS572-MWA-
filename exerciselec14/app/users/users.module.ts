import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsersComponent } from './users.component';
import { UserdetailsComponent } from './userdetails.component';
import { RouterModule } from '@angular/router';
import { UsernotfoundComponent } from './usermotfound-component.component';
import { UserGuardService } from './user-guard.service';

@NgModule({
  declarations: [UsersComponent,UserdetailsComponent,UsernotfoundComponent],
  imports: [
    CommonModule,
    RouterModule.forChild([
      { path: '', component: UsersComponent },
      { path: ':uuid', component: UserdetailsComponent , canActivate : [UserGuardService]},
      { path: 'user/notfound', component: UsernotfoundComponent }
    ])
  ],
  bootstrap:[UsersComponent],
  providers:[UserGuardService]
})
export class UsersModule { }
