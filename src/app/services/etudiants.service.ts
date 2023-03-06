import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable,
 } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EtudiantsService {
public url="http://104.236.2.144/etudiant"
public url1="http://104.236.2.144/bailleur"
public url2="http://104.236.2.144/etudiant/test/montantprevisionnel"
public url7="http://104.236.2.144/etudiant/dernieretudiant/inscrit/annee"
public url8="http://104.236.2.144/bailleur/postbailleur"
public url9="http://104.236.2.144/bailleur/dernierbailleur/bailleurinscrit"
public url5="http://104.236.2.144/etudiant/test4/totalmontant"
public url6="http://104.236.2.144/etudiant/postetudiant"
public url10="http://104.236.2.144/etudiant/updateetuidant"


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
