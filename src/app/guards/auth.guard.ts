import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../services/service.index';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private router: Router, private auth: AuthService) {}
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    /*Intentando autenticar con el servidor, True si está autenticado, false si no*/
  	return this.auth
  			.LogIn()
  			.then(()=> true)
  			.catch(()=>{
  				this.router.navigate(['/login']);
  				return false;
  			});
  }
}
