import { Component, OnInit } from '@angular/core';
import { Subject } from 'rxjs/internal/Subject';
import { EtudiantsService } from '../services/etudiants.service';

@Component({
  selector: 'app-premieretranche',
  templateUrl: './premieretranche.component.html',
  styleUrls: ['./premieretranche.component.css']
})
export class PremieretrancheComponent implements OnInit {
  public rec:any
  public reliquat:any

  dtOptions: any = {};
  dtTrigger: Subject<any> = new Subject<any>();
  constructor(private lidtedebit:EtudiantsService) { }

  ngOnInit(): void {
    this.dtOptions = {
      pagingType: 'full_numbers',
      pageLength: 2,
      processing:true,
      dom: 'Bfrtip',
      buttons: [
        'copy', 'csv', 'excel', 'print'
    ]
    };
    this.lidtedebit.recupdebiteur('2023-2024',100).subscribe(async (data)=>{
      console.log(data)
      this.rec=data
      this.rec=await Promise.all(this.rec.map(async(objection:any)=>
      ({...objection, 'montantEtat':(parseFloat(objection.montant)/3-objection.totalversement )
      } ))
       )

     this.rec= this.rec.filter((obj:any)=>obj.montantEtat >=0 )
       this.dtTrigger.next(this.rec);
       console.log(this.rec );
    })


  }

}

/* this.rec.forEach(function(element:any,index: any ,arr:[]) {
        if (element.montantEtat<0) {
          console.log("merci")
          console.log(index)

        } else {

        }

       })*/
