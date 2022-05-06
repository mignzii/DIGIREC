import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable,
 } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PaiementService {
  public apiurl='http://localhost:6001/facture'
  public apiurl1='http://localhost:6001/etudiant/mign'
  public reponse:any
  public envoie:any

  constructor(private http:HttpClient) {

   }
   postpaie():Observable<any>{
    return this.http.post(this.apiurl,this.reponse)
  }
  miseajour():Observable<any>{
    return this.http.put(this.apiurl1,this.envoie)
  }
}
