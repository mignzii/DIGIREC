import { Component, OnInit } from '@angular/core';
import { Subject } from 'rxjs/internal/Subject';
import { EtudiantsService } from '../services/etudiants.service';

@Component({
  selector: 'app-secondtranche',
  templateUrl: './secondtranche.component.html',
  styleUrls: ['./secondtranche.component.css']
})
export class SecondtrancheComponent implements OnInit {

  public rec:any
  public reliquat:any

  dtOptions: DataTables.Settings = {};
  dtTrigger: Subject<any> = new Subject<any>();
  constructor(private lidtedebit:EtudiantsService) { }

  ngOnInit(): void {
    this.dtOptions = {
      pagingType: 'full_numbers',
      pageLength: 2
    };
    this.lidtedebit.recupdebiteur('2020-2021',100).subscribe(async (data)=>{
      console.log(data)
      this.rec=data
      this.rec=await Promise.all(this.rec.map(async(objection:any)=>
      ({...objection, 'montantEtat':((parseFloat(objection.montant)/3)*2-objection.totalversement )
      } ))
       )
       console.log(this.rec )

       this.rec= this.rec.filter((obj:any)=>obj.montantEtat >=0 )
       this.dtTrigger.next(this.rec);
       console.log(this.rec );
    })


  }

}
