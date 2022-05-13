import { Component, OnInit } from '@angular/core';
import { EtudiantsService } from './../services/etudiants.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-profil',
  templateUrl: './profil.component.html',
  styleUrls: ['./profil.component.css']
})
export class ProfilComponent implements OnInit {

  constructor(private info:EtudiantsService , private route:ActivatedRoute) { }
code=this.route.snapshot.params['id']
public res:any
public res1:any
  ngOnInit(): void {
    this.info.recupinfoetudiant(this.code).subscribe(data=>{
      this.res=data
      console.log(this.res)
      if(this.res){
        this.info.recupbailleur(this.res[0].id_bailleur).subscribe((data)=>{
          this.res1=data
          console.log(this.res1)

        })
      }
    })



  }

}
