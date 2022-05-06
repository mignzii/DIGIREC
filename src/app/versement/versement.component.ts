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
  public revaro=false
  montant=new FormControl()
  libelle=new FormControl()
  date=new FormControl()

  ngOnInit(): void {

  }

  code=new FormControl()
  public stock:any
affiche(){
  this.infoetudiant.recupinfoetudiant(this.code.value).subscribe(data=>{
    console.log(data)
    this.stock=data
  })
}
public a = Math.random()*10
postversement(){
  this.paie.reponse={
    "num_etudiant": this.code.value,
     "id_facture": this.code.value + this.a  ,
      "libelle": this.libelle.value,
       "montant": this.montant.value,
        "date_emission": this.date.value
  }
  this.paie.postpaie().subscribe(data=>{
    console.log(data)
  })
}


miseajour(){
  this.paie.envoie={
      "totalvers":this.stock[0].totalversement+this.montant.value,
      "montantEtat":this.stock[0].montant-(this.stock[0].totalversement+this.montant.value),
      "num_etudiant":this.code.value
  }
  this.paie.miseajour().subscribe(data=>{
    console.log(data)
  })

}




}
