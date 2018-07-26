import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';

import { AuthenticationService } from './authentication.service';

@Injectable()
export class AuthenticationGuard implements CanActivate{
	
	constructor(
      private Router: Router,
      private AuthenticationService: AuthenticationService
	){

	} 

	canActivate(
		route: ActivatedRouteSnapshot,
		state: RouterStateSnapshot
	): boolean{
		if(this.AuthenticationService.isLogged){
			return true;
		}
		this.Router.navigate(['/login']);
		return false;
	}

}
