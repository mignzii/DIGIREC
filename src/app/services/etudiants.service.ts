import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable,
 } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EtudiantsService {
public url="http://localhost:6001/etudiant"
public url14="http://localhost:6001/etudiant/debiteurfilte"
public url1="http://localhost:6001/bailleur"
public url2="http://localhost:6001/etudiant/test/montantprevisionnel"
public url7="http://localhost:6001/etudiant/dernieretudiant/inscrit/annee"
public url8="http://localhost:6001/bailleur/postbailleur"
public url9="http://localhost:6001/bailleur/dernierbailleur/bailleurinscrit"
public url5="http://localhost:6001/etudiant/test4/totalmontant"
public url6="http://localhost:6001/etudiant/postetudiant"
public url10="http://localhost:6001/etudiant/updateetuidant"
public url11="http://localhost:6001/etudiant/passerEtudiant"

  constructor(private http:HttpClient) { }
  public data:any=new FormData()
  public databailleur:any
  recupinfoetudiant(id:any):Observable<any>{
    return this.http.get(`${this.url}/${id}`)
  }
  // j'ajoute un parametre année pour recuperer les etudiants de cette année 
  recupdebiteur(annee:string,page:number):Observable<any>{
    return this.http.get(`${this.url}/${annee}/${page}`)
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
  passeretudiant():Observable<any>{
    return this.http.put(this.url11,this.data)
  }

}
