import { Component, OnInit } from '@angular/core';
import { InfoUtilisateurService } from '../services/info-utilisateur.service';

@Component({
  selector: 'app-dropdown',
  templateUrl: './dropdown.component.html',
  styleUrls: ['./dropdown.component.css']
})
export class DropdownComponent implements OnInit {
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
