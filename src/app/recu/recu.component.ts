import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { EtudiantsService } from '../services/etudiants.service';

@Component({
  selector: 'app-recu',
  templateUrl: './recu.component.html',
  styleUrls: ['./recu.component.css']
})
export class RecuComponent implements OnInit {

  constructor(private route:ActivatedRoute , public info:EtudiantsService) { }
code=this.route.snapshot.params['code']
montant=this.route.snapshot.params['mont']
libelle=this.route.snapshot.params['libelle']
res:any
  ngOnInit(): void {

    this.info.recupinfoetudiant(this.code).subscribe(data=>{
      this.res=data
    })
  }

}
