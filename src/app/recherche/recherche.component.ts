import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-recherche',
  templateUrl: './recherche.component.html',
  styleUrls: ['./recherche.component.css']
})
export class RechercheComponent implements OnInit {
  public user=sessionStorage.getItem('iduser')
  constructor() { }

  ngOnInit(): void {
  }
  idetudiant=new FormControl()

}
