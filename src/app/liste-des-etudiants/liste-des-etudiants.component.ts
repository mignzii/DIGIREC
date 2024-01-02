import { Component, OnInit } from '@angular/core';
import { Subject } from 'rxjs/internal/Subject';
import { FormControl } from '@angular/forms';
import { EtudiantsService } from '../services/etudiants.service';

@Component({
  selector: 'app-liste-des-etudiants',
  templateUrl: './liste-des-etudiants.component.html',
  styleUrls: ['./liste-des-etudiants.component.css']
})
export class ListeDesEtudiantsComponent implements OnInit {

  constructor(private etudiant:EtudiantsService) { }
  public infoEtudiant:any
  public infoEtudiant2:any
  dtOptions: DataTables.Settings = {};
  dtTrigger: Subject<any> = new Subject<any>();
  classe=new FormControl("INGC 3")

  ngOnInit(): void {
    this.dtOptions = {
      pagingType: 'full_numbers',
      pageLength: 2
    };
    this.etudiant.recupdebiteur().subscribe(data=>{
      console.log(data)
      this.infoEtudiant=data
      this.changeetudiant(this.infoEtudiant)
      this.dtTrigger.next(this.infoEtudiant2)
    })
  }
  changeetudiant(claasobj:any){
    const classea=claasobj.filter((element:any)=>{
      return  element.classe==this.classe.value
    })
    this.infoEtudiant2=classea
    console.log(this.infoEtudiant2)
  }

}
