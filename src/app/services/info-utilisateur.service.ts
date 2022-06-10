import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, observable
 } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class InfoUtilisateurService {
  public apiurl="http://localhost:6001/personnel"
  constructor(private http:HttpClient) {
   }
   recupinfo(id:string):Observable<any>{
     return this.http.get(`${this.apiurl}/${id}`)
   }
}
