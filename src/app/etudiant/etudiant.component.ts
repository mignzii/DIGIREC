import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { EtudiantsService } from '../services/etudiants.service';
import { PaiementService } from '../services/paiement.service';

@Component({
  selector: 'app-etudiant',
  templateUrl: './etudiant.component.html',
  styleUrls: ['./etudiant.component.css']
})
export class EtudiantComponent implements OnInit {
public serveurresponse:any
public serveurreponsebailleur:any
dateau=new Date()
public idfacture:any
fichierAEnvoyer: File | null =null
  constructor(private etudiant:EtudiantsService , public paie:PaiementService ) { }
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
 statut=new FormControl()
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
public envoie:any
public idetudiantpasse:any
public idbailleurpasse:any
  ngOnInit(): void {
    this.paie.getmaxid().subscribe(data=>{
      this.idfacture=data[0].idfacture+1
      console.log(this.idfacture)
    })
    this.etudiant.recupidetudiant().subscribe(data=>{
      console.log(data)
      this.idetudiantpasse=parseFloat(data.message)+1
      console.log(typeof(this.idetudiantpasse))
      console.log(this.idetudiantpasse)
    })
    this.etudiant.recupidbailleur().subscribe(data=>{
      console.log(data)
      this.idbailleurpasse=parseFloat(data.message)+1
      console.log(typeof(this.idbailleurpasse))
      console.log(this.idbailleurpasse)
    })
  }
  postversement(){
    this.paie.reponse={
      "num_etudiant":"CE"+this.idetudiantpasse,
        "libelle": "facture",
         "montant": this.montant.value,
          "date_emission": (this.dateau.getDate() +"/" + (this.dateau.getMonth()+1) +"/" + this.dateau.getFullYear()),
          "operation":'Débiteur'
    }
    this.paie.postpaie1().subscribe(data=>{
      console.log(data)
      console.log("ca marche nickel")
    })
  }
  postbailleur(){
    this.etudiant.databailleur={
      prenombailleur:this.prenombailleur.value,
      nombailleur:this.nombailleur.value,
      telephone:this.telephonebailleur.value,
      numbailleur:"CEP"+this.idbailleurpasse,
      email:this.emailbailleur.value,
      poste:this.poste.value,
      domicile:this.domicile.value,
      role:this.role.value
     }
     this.etudiant.postbailleur().subscribe(data=>{
      console.log(data)
      this.serveurreponsebailleur=data
      if(this.serveurreponsebailleur){
        this.postversement()
      }
      else{
        console.log("probleme")
      }
     })
  }
  postetudian(){
       this.etudiant.data.append("prenom",this.prenom.value)
       this.etudiant.data.append("nom",this.nom.value)
       this.etudiant.data.append("carte","CE"+this.idetudiantpasse)
       this.etudiant.data.append("telephone",this.telephone.value)
       this.etudiant.data.append("email",this.email.value)
       this.etudiant.data.append("datenaiss",this.datenaiss.value)
       this.etudiant.data.append("pays",this.pays.value)
       this.etudiant.data.append("classe",this.classe.value)
       this.etudiant.data.append("adresse",this.adresse.value)
       this.etudiant.data.append("formation",this.formation.value)
       this.etudiant.data.append("montant",this.montant.value)
       this.etudiant.data.append("annee",this.annee.value)
       this.etudiant.data.append("statut",this.statut.value)
       this.etudiant.data.append("bailleur","CEP"+this.idbailleurpasse)
       this.etudiant.data.append("image",this.fichierAEnvoyer)
       this.etudiant.postetudiant().subscribe(data=>{
        this.serveurresponse=data
        console.log(this.serveurresponse)
        if(this.serveurresponse){
          console.log(data)
          this.postbailleur()

        }
        else this.serveurreponsebailleur=false

       })
  }


  ele:string="impression"
  PrintElem(elem:any){
   var mywindow :any = window.open('', 'PRINT', 'height=900,width=1300');

   mywindow.document.write('<html><head><title>' + document.title  + '</title>');
   mywindow.document.write('<link rel="stylesheet" href="../../styles.css" />');
   mywindow.document.write('</head><body >');
   mywindow.document.write(document.getElementById(elem)?.innerHTML);
   mywindow.document.write('</body></html>');

   mywindow.document.close(); // necessary for IE >= 10
   mywindow.focus(); // necessary for IE >= 10*/

   mywindow.print();
   mywindow.close();
   console.log("test")
   return true;

}

}
