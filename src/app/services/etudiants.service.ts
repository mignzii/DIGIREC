import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable,
 } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EtudiantsService {
public url="https://digirecbackend.digirec.online/etudiant"
public url14="https://digirecbackend.digirec.online/etudiant/debiteurfilte"
public url1="https://digirecbackend.digirec.online/bailleur"
public url2="https://digirecbackend.digirec.online/etudiant/test/montantprevisionnel"
public url7="https://digirecbackend.digirec.online/etudiant/dernieretudiant/inscrit/annee"
public url8="https://digirecbackend.digirec.online/bailleur/postbailleur"
public url9="https://digirecbackend.digirec.online/bailleur/dernierbailleur/bailleurinscrit"
public url5="https://digirecbackend.digirec.online/etudiant/test4/totalmontant"
public url6="https://digirecbackend.digirec.online/etudiant/postetudiant"
public url10="https://digirecbackend.digirec.online/etudiant/updateetuidant"
public url11="https://digirecbackend.digirec.online/etudiant/passerEtudiant"

  constructor(private http:HttpClient) { }
  public data:any=new FormData()
  public databailleur:any
  recupinfoetudiant(id:any):Observable<any>{
    return this.http.get(`${this.url}/${id}`)
  }
  // j'ajoute un parametre année pour recuperer les etudiants de cette année 
  recupdebiteur(annee:string,page:number):Observable<any>{
    return this.http.get(`${this.url14}/${annee}/${page}`)
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
