import { Component, OnInit } from '@angular/core';
import { EtudiantsService } from './../services/etudiants.service';
import { ActivatedRoute } from '@angular/router';
import { PaiementService } from '../services/paiement.service';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-profil',
  templateUrl: './profil.component.html',
  styleUrls: ['./profil.component.css']
})
export class ProfilComponent implements OnInit {


  constructor(private info:EtudiantsService , private route:ActivatedRoute, private facture:PaiementService ) { }
code=this.route.snapshot.params['id']
public res:any
public res1:any
public dateEtudiant:any
annee=new FormControl()
classe=new FormControl()
formation=new FormControl()
montant=new FormControl()
dateau=new Date()
public totaversement:any=0
public montantfacture:any 
pourcentageProgression:number=0
etudiantinfo:any
  ngOnInit(): void {
    this.info.recupinfoetudiant(this.code).subscribe(data=>{
      this.res=data
      console.log(this.res)
      this.totaversement=this.res[0].totalversement
    this.montantfacture=this.res[0].montant
    this.pourcentageProgression = parseFloat(((this.totaversement / this.montantfacture) * 100).toFixed(1));
      if(this.res){
        this.info.recupbailleur(this.res[0].id_bailleur).subscribe((data)=>{
          this.res1=data
          console.log(this.res1)
         
        })
      }
    })
    this.facture.getoneinfo(this.code).subscribe((data)=>{
      console.log(data)
      this.dateEtudiant=data
     
      this.getdateandclasse(this.dateEtudiant)

    })
   
  }
  passer(){
    this.info.data={
      montant:this.montant.value,
      id_etudiant:this.code,
      classe:this.classe.value,
      formation:this.formation.value,
      annee:this.annee.value,
      libelle:"Facture de Scolarité",
    "date_emission": (this.dateau.getDate() +"/" + (this.dateau.getMonth()+1) +"/" + this.dateau.getFullYear()),
    "operation":'Débiteur'
    }
    this.info.passeretudiant().subscribe((data)=>{
      console.log(data)
    })
  }
  getdateandclasse(data: any) {
    const datesUniques: { [key: string]: any } = {};
  
    // Parcours du tableau et stockage des dates uniques et de la classe
    for (const facture of data) {
      const date = facture.Annee;
      const classe = facture.classe;
  
      // Si la date n'existe pas encore dans l'objet, ajoutez-la avec sa classe
      if (!datesUniques[date]) {
        datesUniques[date] = classe;
      }
    }
  
    console.log(datesUniques);
    this.etudiantinfo=datesUniques
  }
  
  getKeys(obj: any): string[] {
    return Object.keys(obj);
  }


}
