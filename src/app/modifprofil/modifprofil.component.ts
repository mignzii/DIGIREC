import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { EtudiantsService } from '../services/etudiants.service';
import { FormControl } from '@angular/forms';
import { PaiementService } from '../services/paiement.service';


@Component({
  selector: 'app-modifprofil',
  templateUrl: './modifprofil.component.html',
  styleUrls: ['./modifprofil.component.css']
})
export class ModifprofilComponent implements OnInit {
  code=this.route.snapshot.params['id']
  constructor(private info:EtudiantsService, private route: ActivatedRoute) { }
  public res:any
public res1:any
dateau=new Date()
fichierAEnvoyer: File | null =null
  prenom=new FormControl()
  nom=new FormControl()
  telephone=new FormControl()
  email=new FormControl()
  datenaiss=new FormControl()
  pays=new FormControl()
  classe=new FormControl()
  formation=new FormControl()
  montant=new FormControl()
  adresse=new FormControl()
  annee=new FormControl()
  bailleur=new FormControl()
  date=this.dateau.getDate() +"/" + (this.dateau.getMonth()+1) +"/" + this.dateau.getFullYear()
 
  prenombailleur=new FormControl()
  nombailleur=new FormControl()
  telephonebailleur=new FormControl()
  emailbailleur=new FormControl()
  poste=new FormControl()
  domicile=new FormControl()
  role=new FormControl()

 
  onFileSelect(event:any) {
   if (event.target.files.length > 0) {
      this.fichierAEnvoyer = event.target.files[0];
    console.log(this.fichierAEnvoyer)
   }
 }
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
  postetudian(){
    this.info.data.append("prenom",this.prenom.value)
    this.info.data.append("nom",this.nom.value)
   // this.info.data.append("carte","CE"+this.idetudiantpasse)
    this.info.data.append("telephone",this.telephone.value)
    this.info.data.append("email",this.email.value)
    this.info.data.append("datenaiss",this.datenaiss.value)
    this.info.data.append("pays",this.pays.value)
    this.info.data.append("classe",this.classe.value)
    this.info.data.append("adresse",this.adresse.value)
    this.info.data.append("formation",this.formation.value)
    this.info.data.append("montant",this.montant.value)
    this.info.data.append("annee",this.annee.value)
   // this.info.data.append("bailleur","CEP"+this.idbailleurpasse)
    this.info.data.append("image",this.fichierAEnvoyer)
   
    
}

}