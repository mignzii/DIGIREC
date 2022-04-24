import { Component, OnInit } from '@angular/core';
import { InfoUtilisateurService } from './../services/info-utilisateur.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-tableaudebord-comptable',
  templateUrl: './tableaudebord-comptable.component.html',
  styleUrls: ['./tableaudebord-comptable.component.css']
})
export class TableaudebordComptableComponent implements OnInit {

  constructor(private utilisateur:InfoUtilisateurService ,private route:ActivatedRoute) { }
public res:any
public afficheur:any
  ngOnInit(): void {
    const id=this.route.snapshot.params['num']
    this.utilisateur.recupinfo(id).subscribe(data=>{
      this.res=data
      console.log(this.res)
      this.afficheur=this.res[0].Fonction
      console.log(this.afficheur)
    })
  }

}
