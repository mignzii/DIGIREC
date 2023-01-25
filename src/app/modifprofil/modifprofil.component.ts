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
  code=this.route.snapshot.params['idetudiant']
  serveurreponsebailleur:any
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
      this.prenom.setValue(this.res[0].prenom)
      this.nom.setValue(this.res[0].nom)
      this.telephone.setValue(this.res[0].telephone)
      this.datenaiss.setValue(this.res[0].dateNaiss)
      this.email.setValue(this.res[0].email)
      this.annee.setValue(this.res[0].annee_scolaire)
      this.classe.setValue(this.res[0].classe)
      this.adresse.setValue(this.res[0].Adreesse)
      this.pays.setValue(this.res[0].nationalite)
      this.montant.setValue(this.res[0].montant)
      this.formation.setValue(this.res[0].formation)

      console.log(this.prenom.value)
      if(this.res){
        this.info.recupbailleur(this.res[0].id_bailleur).subscribe((data)=>{
          this.res1=data

          console.log(this.res1)
          this.bailleur.setValue(this.res1[0].id_bailleur)
          this.prenombailleur.setValue(this.res1[0].prenom)
          this.nombailleur.setValue(this.res1[0].nom)
          this.role.setValue(this.res1[0].role)
          this.emailbailleur.setValue(this.res1[0].mail)
          this.poste.setValue(this.res1[0].poste_occupe)
          this.domicile.setValue(this.res1[0].adresse)
          this.telephonebailleur.setValue(this.res1[0].tel)

        })
      }
    })

    
  }
  updateetuiant(){
    console.log(this.prenom.value)
    this.info.data={
      "carte":this.code,
      "bailleur":this.bailleur.value,
      "prenom":this.prenom.value,
      "nom":this.nom.value,
      "telephone":this.telephone.value,
      "email":this.email.value,
      "datenaiss":this.datenaiss.value,
      "pays":this.pays.value,
      "classe":this.classe.value,
      "adresse":this.adresse.value,
      "formation":this.formation.value,
      "montant":this.montant.value,
      "annee":this.annee.value
    }
    
   
    this.info.updateetudiant().subscribe(data=>{
      console.log(data)
      this.serveurreponsebailleur=data
      console.log(this.serveurreponsebailleur)
    })
}
updatebailleur(){
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
 
  this.info.updateetudiant().subscribe(data=>{
    console.log(data)
   
  })
}


}