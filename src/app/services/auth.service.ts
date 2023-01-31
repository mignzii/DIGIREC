import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }
  public isAuthenticated(){
    const user=sessionStorage.getItem('iduser')
    return (user ? true :false )
  }
}
