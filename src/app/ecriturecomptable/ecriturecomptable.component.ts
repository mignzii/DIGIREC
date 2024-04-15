import { Component, OnInit } from '@angular/core';
import { Subject } from 'rxjs/internal/Subject';
import { PaiementService } from '../services/paiement.service';

@Component({
  selector: 'app-ecriturecomptable',
  templateUrl: './ecriturecomptable.component.html',
  styleUrls: ['./ecriturecomptable.component.css']
})
export class EcriturecomptableComponent implements OnInit {
  public rec:any
  dtOptions: DataTables.Settings = {};
  dtTrigger: Subject<any> = new Subject<any>();
  public param_annee=localStorage.getItem('annne')
  public param_page=localStorage.getItem('page')
  public comptegeneral:string=''
  constructor( public paie:PaiementService) { }

  ngOnInit(): void {
    this.dtOptions = {
      pagingType: 'full_numbers',
      pageLength: 2
    };
    this.paie.getallinfo('2023-2024',50).subscribe(data=>{
      this.rec=data
      console.log(this.rec)
      this.dtTrigger.next(this.rec);
      console.log(this.rec)
      console.log('test')

    })
  }

}
