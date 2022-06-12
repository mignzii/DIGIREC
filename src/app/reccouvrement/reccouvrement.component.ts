import { Component, OnInit } from '@angular/core';
import { Subject } from 'rxjs/internal/Subject';
import { EtudiantsService } from '../services/etudiants.service';

@Component({
  selector: 'app-reccouvrement',
  templateUrl: './reccouvrement.component.html',
  styleUrls: ['./reccouvrement.component.css']
})
export class ReccouvrementComponent implements OnInit {

  dtOptions: DataTables.Settings = {};
dtTrigger: Subject<any> = new Subject<any>();

  constructor(private arecou:EtudiantsService) { }
public inter:any
public previsionelparclasse:any
public montantprevisionnel:any

  ngOnInit(): void {
    this.dtOptions = {
      pagingType: 'full_numbers',
      pageLength: 2
    };
    this.arecou.recupmontantprevisionnelparclasse().subscribe(data=>{
      this.previsionelparclasse=data
      console.log(this.previsionelparclasse)
      this.dtTrigger.next(this.previsionelparclasse)
      console.log(this.previsionelparclasse)
    })
    this.arecou.recuptotalmontant().subscribe(data=>{
      this.montantprevisionnel=data
      console.log(this.montantprevisionnel)
    })
  }

}
