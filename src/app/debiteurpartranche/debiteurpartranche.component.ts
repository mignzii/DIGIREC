import { Component, OnInit } from '@angular/core';
import { Subject } from 'rxjs/internal/Subject';
import { EtudiantsService } from '../services/etudiants.service';

@Component({
  selector: 'app-debiteurpartranche',
  templateUrl: './debiteurpartranche.component.html',
  styleUrls: ['./debiteurpartranche.component.css']
})
export class DebiteurpartrancheComponent implements OnInit {
  public rec:any
  dtOptions: DataTables.Settings = {};
  dtTrigger: Subject<any> = new Subject<any>();

  constructor(private lidtedebit:EtudiantsService) { }

  ngOnInit(): void {
    this.dtOptions = {
      pagingType: 'full_numbers',
      pageLength: 2
    };
    this.lidtedebit.recupdebiteur('2023-2024',100).subscribe(data=>{
      this.rec=data
      console.log(this.rec)
      this.dtTrigger.next(this.rec);
      console.log(this.rec)

    })
  }

}
