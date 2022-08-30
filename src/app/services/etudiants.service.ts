import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable,
 } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EtudiantsService {
public url="http://localhost:6001/etudiant"
public url1="http://localhost:6001/bailleur"
public url2="http://localhost:6001/etudiant/test/montantprevisionnel"

public url5="http://localhost:6001/etudiant/test4/totalmontant"
public url6="http://localhost:6001/etudiant/postetudiant"


  constructor(private http:HttpClient) { }
  public data:any=new FormData()

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


}
