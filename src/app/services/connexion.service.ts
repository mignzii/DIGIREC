import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class ConnexionService {

  constructor(private http:HttpClient) { }
  public apiurl="http://localhost:6001/membrepersonnel"
  recupone(id:any):Observable<any>{
    return this.http.get(`${this.apiurl}/${id}`)
  }
}
