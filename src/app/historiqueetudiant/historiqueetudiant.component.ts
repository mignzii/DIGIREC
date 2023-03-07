import { Component, OnInit } from '@angular/core';
import { EtudiantsService } from './../services/etudiants.service';
import { Subject } from 'rxjs/internal/Subject';
import { ActivatedRoute } from '@angular/router';
import { PaiementService } from '../services/paiement.service';


@Component({
  selector: 'app-historiqueetudiant',
  templateUrl: './historiqueetudiant.component.html',
  styleUrls: ['./historiqueetudiant.component.css']
})
export class HistoriqueetudiantComponent implements OnInit {

  public rec:any
  dtOptions: DataTables.Settings = {};
  dtTrigger: Subject<any> = new Subject<any>();
  facture_affiche: boolean = false;
  recu_affiche: boolean = false;

  constructor(private info:EtudiantsService , private route:ActivatedRoute,public paie:PaiementService) { }
  code=this.route.snapshot.params['idetudiant']
  recuaafficher:any
  public res:any
  public user=sessionStorage.getItem('iduser')
  ngOnInit(): void {
    this.info.recupinfoetudiant(this.code).subscribe((data)=>{
      this.res=data
      console.log(data)
    })
    this.dtOptions = {
      pagingType: 'full_numbers',
      pageLength: 2
    };
    this.paie.getoneinfo(this.code).subscribe(data=>{
      console.log(this.code)
      this.rec=data
      console.log("bonkou")
      console.log(this.rec)
      this.dtTrigger.next(this.rec);
      console.log(this.rec)

    })
  }
  facture_etudiant:any
  sortirfacu(){
    this.facture_etudiant=this.rec.filter((item:any)=> item.libelle==='facture' 
    )
    console.log(this.facture_etudiant)
    this.facture_affiche=true
    this.recu_affiche=false
  }
  sortirecu(iduser:any){
    this.facture_etudiant=this.rec.filter((item:any)=> item.libelle==='Frais de scolarité' && item.id_facture === iduser
    )
    console.log(this.facture_etudiant)
    this.facture_affiche=false
    this.recu_affiche=true
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
