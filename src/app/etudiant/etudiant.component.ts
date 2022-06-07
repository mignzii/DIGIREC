import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-etudiant',
  templateUrl: './etudiant.component.html',
  styleUrls: ['./etudiant.component.css']
})
export class EtudiantComponent implements OnInit {

  constructor() { }
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


  ngOnInit(): void {
  }

}
