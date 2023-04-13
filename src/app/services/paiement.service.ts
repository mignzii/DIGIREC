import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable,
 } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PaiementService {
<<<<<<< HEAD
  public apiurl='https://coral-app-a57e6.ondigitalocean.app/facture'
  public apiurl2='https://coral-app-a57e6.ondigitalocean.app/facture/debiteur'
  public apiurl1='https://coral-app-a57e6.ondigitalocean.app/etudiant/mign'
  public apiurl3='https://coral-app-a57e6.ondigitalocean.app/facture/getfacture'
  public apiurl4='https://coral-app-a57e6.ondigitalocean.app/facture/maxfacture'
  public apiurl5='https://coral-app-a57e6.ondigitalocean.app/facture/onefacture'
=======
  public apiurl='http://104.236.2.144/facture'
  public apiurl2='http://104.236.2.144/facture/debiteur'
  public apiurl1='http://104.236.2.144/etudiant/mign'
  public apiurl3='http://104.236.2.144/facture/getfacture'
  public apiurl4='http://104.236.2.144/facture/maxfacture'
  public apiurl5='http://104.236.2.144/facture/onefacture'
>>>>>>> parent of cfd754c ( last essai)

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
  getoneinfo(id:any):Observable<any>{
    return this.http.get(`${this.apiurl5}/${id}`)
  }
}
