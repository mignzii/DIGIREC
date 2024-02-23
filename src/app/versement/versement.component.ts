import { Component, OnInit } from '@angular/core';
import { EtudiantsService } from '../services/etudiants.service';
import { FormControl } from '@angular/forms';
import { PaiementService } from '../services/paiement.service';


@Component({
  selector: 'app-versement',
  templateUrl: './versement.component.html',
  styleUrls: ['./versement.component.css']
})
export class VersementComponent implements OnInit {

  constructor(private infoetudiant:EtudiantsService,public paie:PaiementService) { }
  public revari=false
  public revar=false
  public paiemen=false
  public revaro=false
  public FD=false
  public FS=true
  public FC=false
  public FM=false
  public ancien=false
  public nouveau=false
  code=new FormControl()
  codeetudiant=new FormControl()

  montant=new FormControl()
  libelle=new FormControl()
  date=new FormControl()
  responsable=new FormControl()
  type=new FormControl()
  banque=new FormControl()
  reference=new FormControl()
  type_scol=new FormControl()
  public test=sessionStorage.getItem('iduser')
  public totaversement:any=0
  public montantfacture:any 
  pourcentageProgression:number=0
  ngOnInit(): void {
    console.log(this.test)
  }


  public stock:any
  public etudiantinfo:any
  affichepaiem(){
    this.paiemen=true
    console.log(this.paiemen)

  }
  affichecontraire(){
    this.paiemen=false
  }
  dossier(){
this.FD=true
this.FC=false
this.FM=false
this.FS=false

  }
  scolarite(){
    this.FD=false
  this.FC=false
  this.FM=false
  this.FS=true

  }
  certif(){
    this.FD=false
    this.FC=true
  this.FM=false
  this.FS=false

  }
  module(){
    this.FD=false
  this.FC=false
  this.FM=true
  this.FS=false

  }
  affichenouveau(){
    this.ancien=false
    this.nouveau=true
  }
  afficheancien(){
    this.ancien=true
    this.nouveau=false
  }

affiche(){
  this.infoetudiant.recupinfoetudiant(this.code.value).subscribe(data=>{
    console.log("les donnees de l'etudiant " , data)
    this.stock=data[0]
    this.totaversement=this.stock.totalversement
    this.montantfacture=this.stock.montant
    this.pourcentageProgression = parseFloat(((this.totaversement / this.montantfacture) * 100).toFixed(1));

   
    console.log(this.stock)
  })
  this.paie.getoneinfo(this.code.value).subscribe((data)=>{
    console.log(data)
    this.getdateandclasse(data)
  })

}
affiche2(){
  console.log('certif')
}
getdateandclasse(data: any) {
  const datesUniques: { [key: string]: any } = {};

  // Parcours du tableau et stockage des dates uniques et de la classe
  for (const facture of data) {
    const date = facture.Annee;
    const classe = facture.classe;
    if (facture.libelle=="Facture Scolarite" &&!datesUniques[date] ) {
      datesUniques[date] = classe;
    } 
    // Si la date n'existe pas encore dans l'objet, ajoutez-la avec sa classe
   
  }

  console.log(datesUniques);
  this.etudiantinfo=datesUniques
}

getKeys(obj: any): string[] {
  return Object.keys(obj);
}

public serveurresponse:any
public serveurresponse2:any
postversement(){
  this.paie.reponse={
    "num_etudiant": this.code.value,
      "libelle": "Frais de scolarité",
       "montant": this.montant.value,
        "date_emission": this.date.value,
        "typeoperation":this.type.value,
        "banque":this.reference.value,
        "reference":this.banque.value,
        
  }
  this.paie.postpaie().subscribe(data=>{
    this.serveurresponse=data
    console.log(this.serveurresponse)
  })

}
postfacture(){
  this.paie.reponse={
    "num_etudiant": this.code.value,
      "libelle": this.type_scol.value,
       "montant": this.montant.value,
        "date_emission": this.date.value,
        "typeoperation":this.type.value,
        "banque":this.reference.value,
        "reference":this.banque.value,
        
  }
  this.paie.postpaie().subscribe(data=>{
    this.serveurresponse2=data
    console.log(this.serveurresponse2)
  })

}

miseajour(){
  this.paie.envoie={
      "totalvers":(parseInt(this.stock.totalversement))+(parseInt(this.montant.value)),
      "montantEtat":parseInt(this.stock.montant)-(parseInt(this.stock.totalversement)+(parseInt(this.montant.value))),
      "num_etudiant":this.code.value,
      "nbredevers":this.stock.nbredeversement+1,
      "responsable":this.responsable.value
  }
  this.paie.miseajour().subscribe(data=>{
    console.log(data)
  })

}





}
