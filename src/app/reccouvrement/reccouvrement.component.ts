import { Component, OnInit } from '@angular/core';
import { EtudiantsService } from '../services/etudiants.service';

@Component({
  selector: 'app-reccouvrement',
  templateUrl: './reccouvrement.component.html',
  styleUrls: ['./reccouvrement.component.css']
})
export class ReccouvrementComponent implements OnInit {

  constructor(private arecou:EtudiantsService) { }
public inter:any
  ngOnInit(): void {
    this.arecou.recupdebiteur().subscribe(data=>{
      this.inter=data
    })
  }

}
