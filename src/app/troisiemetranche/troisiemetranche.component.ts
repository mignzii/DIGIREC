import { Component, OnInit } from '@angular/core';
import { Subject } from 'rxjs/internal/Subject';
import { EtudiantsService } from '../services/etudiants.service';

@Component({
  selector: 'app-troisiemetranche',
  templateUrl: './troisiemetranche.component.html',
  styleUrls: ['./troisiemetranche.component.css']
})
export class TroisiemetrancheComponent implements OnInit {
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
    this.lidtedebit.recupdebiteur('2023-2024',100).subscribe(async (data)=>{
      console.log(data)
      this.rec=data
      this.rec=await Promise.all(this.rec.map(async(objection:any)=>
      ({...objection, 'montantEtat':(parseFloat(objection.montant)-objection.totalversement )
      } ))
       )
       console.log(this.rec )
       this.rec.forEach(function(element:any,index: any ,arr:[]) {
        if (element.montantEtat<0) {

          console.log("merci")
          console.log(index)

        } else {

        }

       })
       this.dtTrigger.next(this.rec);
       console.log(this.rec );
    })


  }

}
