import { Component, OnInit } from '@angular/core';
import { EtudiantsService } from './../services/etudiants.service';

@Component({
  selector: 'app-profil',
  templateUrl: './profil.component.html',
  styleUrls: ['./profil.component.css']
})
export class ProfilComponent implements OnInit {

  constructor(private info:EtudiantsService) { }

  ngOnInit(): void {
  }

}
