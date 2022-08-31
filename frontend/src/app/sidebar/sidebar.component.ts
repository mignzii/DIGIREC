import { Component, OnInit } from '@angular/core';
import { EtudiantsService } from './../services/etudiants.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  constructor(public etud:EtudiantsService) { }

  user=sessionStorage.getItem('iduser')
  ngOnInit(): void {

  }

}
