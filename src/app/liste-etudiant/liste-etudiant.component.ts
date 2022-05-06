import { Component, OnInit } from '@angular/core';
import { EtudiantsService } from '../services/etudiants.service';

@Component({
  selector: 'app-liste-etudiant',
  templateUrl: './liste-etudiant.component.html',
  styleUrls: ['./liste-etudiant.component.css']
})
export class ListeEtudiantComponent implements OnInit {

  public rec:any

  constructor(private lidtedebit:EtudiantsService) { }

  ngOnInit(): void {
    this.lidtedebit.recupdebiteur().subscribe(data=>{
      this.rec=data
      console.log(this.rec)
    })
  }

}
