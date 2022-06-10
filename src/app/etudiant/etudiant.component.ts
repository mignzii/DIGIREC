import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { EtudiantsService } from '../services/etudiants.service';

@Component({
  selector: 'app-etudiant',
  templateUrl: './etudiant.component.html',
  styleUrls: ['./etudiant.component.css']
})
export class EtudiantComponent implements OnInit {
public serveurresponse:any
  constructor(private etudiant:EtudiantsService) { }
 prenom=new FormControl()
 nom=new FormControl()
 carte=new FormControl()
 telephone=new FormControl()
 email=new FormControl()
 datenaiss=new FormControl()
 pays=new FormControl()
 classe=new FormControl()
 formation=new FormControl()
 montant=new FormControl()
 annee=new FormControl()
 bailleur=new FormControl()

public envoie:any
  ngOnInit(): void {
  }
  postetudian(){
    this.etudiant.data ={
      prenom:this.prenom.value,
      nom:this.nom.value,
      carte:this.carte.value,
      telephone:this.telephone.value,
      email:this.email.value,
      datenaiss:this.datenaiss.value,
      pays:this.pays.value,
      classe:this.classe.value,
      formation:this.formation.value,
      montant:this.montant.value,
      annee:this.annee.value,
      bailleur:this.bailleur.value
       }
       this.etudiant.postetudiant().subscribe(data=>{
        this.serveurresponse=data
         console.log(data)
       })
  }

}
