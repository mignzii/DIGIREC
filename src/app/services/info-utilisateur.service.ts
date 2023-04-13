import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, observable
 } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class InfoUtilisateurService {
  public envoie:any
  public data:any=new FormData()
<<<<<<< HEAD
  public apiurl="https://coral-app-a57e6.ondigitalocean.app/personnel"
  public apiurl1="https://coral-app-a57e6.ondigitalocean.app/personnel/update"
  public apiurl2="https://coral-app-a57e6.ondigitalocean.app/personnel/updateprofile"
=======
  public apiurl="http://104.236.2.144/personnel"
  public apiurl1="http://104.236.2.144/personnel/update"
  public apiurl2="http://104.236.2.144/personnel/updateprofile"
>>>>>>> parent of cfd754c ( last essai)
  constructor(private http:HttpClient) {
   }
   recupinfo(id:string):Observable<any>{
     return this.http.get(`${this.apiurl}/${id}`)
   }
   miseajour():Observable<any>{
    return this.http.put(this.apiurl1,this.envoie)
  }
  miseajourphoto():Observable<any>{
    return this.http.put(this.apiurl2,this.data)
  }

}
