import { Component, OnInit } from '@angular/core';
import { InfoUtilisateurService } from '../services/info-utilisateur.service';

@Component({
  selector: 'app-statistiques',
  templateUrl: './statistiques.component.html',
  styleUrls: ['./statistiques.component.css']
})
export class StatistiquesComponent implements OnInit {
public url:any
public res:any
  constructor(private utilisateur:InfoUtilisateurService) { }

  ngOnInit(): void {
    this.url=sessionStorage.getItem('iduser')
    this.utilisateur.recupinfo(this.url).subscribe(data=>{
      this.res=data
      console.log(this.res)

    })
  }

}
