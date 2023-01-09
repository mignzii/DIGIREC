import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, observable
 } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class InfoUtilisateurService {
  public envoie:any
  public apiurl="http://localhost:6001/personnel"
  public apiurl1="http://localhost:6001/personnel/update"
  constructor(private http:HttpClient) {
   }
   recupinfo(id:string):Observable<any>{
     return this.http.get(`${this.apiurl}/${id}`)
   }
   miseajour():Observable<any>{
    return this.http.put(this.apiurl1,this.envoie)
  }
}
