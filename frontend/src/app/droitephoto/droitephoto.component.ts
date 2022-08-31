import { Component, OnInit } from '@angular/core';
import { InfoUtilisateurService } from '../services/info-utilisateur.service';

@Component({
  selector: 'app-droitephoto',
  templateUrl: './droitephoto.component.html',
  styleUrls: ['./droitephoto.component.css']
})
export class DroitephotoComponent implements OnInit {
  public url:any
  public responsable:any
  constructor(private utilisateur:InfoUtilisateurService) { }

  ngOnInit(): void {
    this.url=sessionStorage.getItem('iduser')
    this.utilisateur.recupinfo(this.url ).subscribe(data=>{
      this.responsable=data
      console.log(this.responsable)
    })
  }

}
