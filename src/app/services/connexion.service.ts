import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, observable
 } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class ConnexionService {

  constructor(private http:HttpClient) { }
  public apiurl="https://digirec.vercel.app/membrepersonnel"
  recupone(id:any):Observable<any>{
    return this.http.get(`${this.apiurl}/${id}`)
  }
}
