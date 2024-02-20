import { Component, OnInit } from '@angular/core';
import { Subject } from 'rxjs/internal/Subject';
import { EtudiantsService } from '../services/etudiants.service';


@Component({
  selector: 'app-liste-etudiant',
  templateUrl: './liste-etudiant.component.html',
  styleUrls: ['./liste-etudiant.component.css']
})
export class ListeEtudiantComponent implements OnInit {

  public rec:any
  dtOptions: DataTables.Settings = {};
  dtTrigger: Subject<any> = new Subject<any>();


  constructor(private lidtedebit:EtudiantsService) { }

  ngOnInit(): void {
    this.dtOptions = {
      pagingType: 'full_numbers',
      pageLength: 2
    };
    this.lidtedebit.recupdebiteur('2023-2024',25).subscribe(data=>{
      this.rec=data
      console.log(this.rec)
      this.dtTrigger.next(this.rec);
      console.log(this.rec)

    })
  }

}
