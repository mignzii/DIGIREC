import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable,
 } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PaiementService {
  public apiurl='http://localhost:6001/facture'
  public apiurl2='http://localhost:6001/facture/debiteur'
  public apiurl1='http://localhost:6001/etudiant/mign'
  public apiurl3='http://localhost:6001/facture/getfacture'
  public apiurl4='http://localhost:6001/facture/maxfacture'
  public apiurl5='http://localhost:6001/facture/onefacture'
  public apiurl6='http://localhost:6001/facture/caisse'

  public reponse:any
  public envoie:any

  constructor(private http:HttpClient) {

   }
   postpaie():Observable<any>{
    return this.http.post(this.apiurl,this.reponse)
  }
  postpaie1():Observable<any>{
    return this.http.post(this.apiurl2,this.reponse)
  }
  miseajour():Observable<any>{
    return this.http.put(this.apiurl1,this.envoie)
  }
  // ajouter un parametre date pour recuperer les etudiants de cette période 
  getallinfo(annee:string,page:number):Observable<any>{
    return this.http.get(`${this.apiurl3}/${annee}/${page}`)
  }
  getcaisse():Observable<any>{
    return this.http.get(this.apiurl6)
  }
  getmaxid():Observable<any>{
    return this.http.get(this.apiurl4)
  }
  getoneinfo(id:any):Observable<any>{
    return this.http.get(`${this.apiurl5}/${id}`)
  }
}
