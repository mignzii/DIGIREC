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
dateau=new Date()
public idfacture:any
  constructor(private etudiant:EtudiantsService , public paie:PaiementService ) { }
 prenom=new FormControl()
 nom=new FormControl()
 carte=new FormControl()
 telephone=new FormControl()
 email=new FormControl()
 datenaiss=new FormControl()
 pays=new FormControl()
 classe=new FormControl()
 formation=new FormControl()
 montant=new FormControl()
 annee=new FormControl()
 bailleur=new FormControl()
 date=this.dateau.getDate() +"/" + (this.dateau.getMonth()+1) +"/" + this.dateau.getFullYear()

public envoie:any
  ngOnInit(): void {
    this.paie.getmaxid().subscribe(data=>{
      this.idfacture=data[0].idfacture+1
      console.log(this.idfacture)
    })
  }
  postversement(){
    this.paie.reponse={
      "num_etudiant": this.carte.value,
        "libelle": "facture",
         "montant": this.montant.value,
          "date_emission": (this.dateau.getDate() +"/" + (this.dateau.getMonth()+1) +"/" + this.dateau.getFullYear()),
          "operation":'Débiteur'
    }
    this.paie.postpaie1().subscribe(data=>{

      console.log("ca marche nickel")
    })

  }
  postetudian(){
    this.etudiant.data ={
      prenom:this.prenom.value,
      nom:this.nom.value,
      carte:this.carte.value,
      telephone:this.telephone.value,
      email:this.email.value,
      datenaiss:this.datenaiss.value,
      pays:this.pays.value,
      classe:this.classe.value,
      formation:this.formation.value,
      montant:this.montant.value,
      annee:this.annee.value,
      bailleur:this.bailleur.value
       }
       this.etudiant.postetudiant().subscribe(data=>{
        this.serveurresponse=data
        console.log(this.serveurresponse)
        if(this.serveurresponse){
          console.log(data)
          this.postversement()
        }else this.serveurresponse=false

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
