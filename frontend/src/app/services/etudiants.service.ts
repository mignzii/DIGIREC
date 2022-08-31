import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable,
 } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EtudiantsService {
public url="https://infinite-dusk-49322.herokuapp.com/etudiant"
public url1="https://infinite-dusk-49322.herokuapp.com/bailleur"
public url2="https://infinite-dusk-49322.herokuapp.com/etudiant/test/montantprevisionnel"

public url5="https://infinite-dusk-49322.herokuapp.com/etudiant/test4/totalmontant"
public url6="https://infinite-dusk-49322.herokuapp.com/etudiant/postetudiant"


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
