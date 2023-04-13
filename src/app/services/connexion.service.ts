import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, observable
 } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class ConnexionService {

  constructor(private http:HttpClient) { }
<<<<<<< HEAD
  public apiurl="https://coral-app-a57e6.ondigitalocean.app/membrepersonnel"
=======
  public apiurl="http://104.236.2.144/membrepersonnel"
>>>>>>> parent of cfd754c ( last essai)
  recupone(id:any):Observable<any>{
    return this.http.get(`${this.apiurl}/${id}`)
  }
}
