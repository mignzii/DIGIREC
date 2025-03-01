import { Injectable } from '@angular/core';
import {  CanActivate,Router, } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements CanActivate {

  constructor(public auth:AuthService, public router:Router) { }
  canActivate():boolean{
    if(!this.auth.isAuthenticated()){
      this.router.navigate(['connexion'])
      return false
    }
    else return true 
  }
  
}
