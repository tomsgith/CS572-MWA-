import { Injectable } from '@angular/core';
import { CanActivate,ActivatedRoute,Router,ActivatedRouteSnapshot,RouterStateSnapshot } from '@angular/router';
import { UserSerService } from '../user-ser.service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserGuardService implements CanActivate {

  id: string;
  constructor(private route: ActivatedRoute, private serv: UserSerService, private router: Router){};

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot):
  Observable <boolean> | boolean {
      const data = this.serv.getCachedData();
      this.id = route.params.uuid;
      let isFound = false;

      data.results.forEach(element => {
          if(element.login.uuid == this.id) {
              isFound = true;
          } 
      });

      if(isFound) return true;
      this.router.navigateByUrl('users/user/notfound');
  }
}
