import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable,
 } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EtudiantsService {
public url="https://coral-app-a57e6.ondigitalocean.app/etudiant"
public url1="https://coral-app-a57e6.ondigitalocean.app/bailleur"
public url2="https://coral-app-a57e6.ondigitalocean.app/etudiant/test/montantprevisionnel"
public url7="https://coral-app-a57e6.ondigitalocean.app/etudiant/dernieretudiant/inscrit/annee"
public url8="https://coral-app-a57e6.ondigitalocean.app/bailleur/postbailleur"
public url9="https://coral-app-a57e6.ondigitalocean.app/bailleur/dernierbailleur/bailleurinscrit"
public url5="https://coral-app-a57e6.ondigitalocean.app/etudiant/test4/totalmontant"
public url6="https://coral-app-a57e6.ondigitalocean.app/etudiant/postetudiant"
public url10="https://coral-app-a57e6.ondigitalocean.app/etudiant/updateetuidant"


  constructor(private http:HttpClient) { }
  public data:any=new FormData()
  public databailleur:any
  recupinfoetudiant(id:any):Observable<any>{
    return this.http.get(`${this.url}/${id}`)
  }
  recupdebiteur():Observable<any>{
    return this.http.get(this.url)
  }
  recupbailleur(id:any):Observable<any>{
    return this.http.get(`${this.url1}/${id}`)
  }
  recupmontantprevisionnelparclasse():Observable<any>{
    return this.http.get(this.url2)
  }
  recuptotalmontant():Observable<any>{
    return this.http.get(this.url5)
  }
  postetudiant():Observable<any>{
    return this.http.post(this.url6,this.data)
  }
  postbailleur():Observable<any>{
    return this.http.post(this.url8,this.databailleur)
  }
  recupidetudiant():Observable<any>{
    return this.http.get(this.url7)
  }
  recupidbailleur():Observable<any>{
    return this.http.get(this.url9)
  }
  updateetudiant():Observable<any>{
    return this.http.put(this.url10,this.data)
  }

}
