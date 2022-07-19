import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from '@angular/router';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AuthService} from './auth.service';

@Injectable({
  providedIn: 'root'
})

export class AdminGuardService implements CanActivate {
  adminMessage:string = '';
  constructor(private authService: AuthService,
    private router: Router) {
      
     }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
      if(localStorage.getItem("token")){ //Condition pour verifier qu'on est un admin
        return true;
      } else{
        this.router.navigate(['/not-found']);
        return false;
      }
      
  }
}
