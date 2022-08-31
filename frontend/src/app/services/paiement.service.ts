import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable,
 } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PaiementService {
  public apiurl='https://infinite-dusk-49322.herokuapp.com/facture'
  public apiurl2='https://infinite-dusk-49322.herokuapp.com/facture/debiteur'
  public apiurl1='https://infinite-dusk-49322.herokuapp.com/etudiant/mign'
  public apiurl3='https://infinite-dusk-49322.herokuapp.com/facture/getfacture'
  public apiurl4='https://infinite-dusk-49322.herokuapp.com/facture/maxfacture'

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
  getallinfo():Observable<any>{
    return this.http.get(this.apiurl3)
  }
  getmaxid():Observable<any>{
    return this.http.get(this.apiurl4)
  }
}
