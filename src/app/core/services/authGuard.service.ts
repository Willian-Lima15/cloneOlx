import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements CanActivate{

constructor(
  private authService: AuthService,
  private router: Router
) { }

 public canActivate(): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
    if(!this.authService.isAuthenticated()){
      this.authService.setRedirectUrl(this.router.url)
      this.router.navigate(['login'])
      return false
    }
    return true
  }

}
