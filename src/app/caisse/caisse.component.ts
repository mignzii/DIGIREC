import { Component, OnInit } from '@angular/core';
import { PaiementService } from '../services/paiement.service';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-caisse',
  templateUrl: './caisse.component.html',
  styleUrls: ['./caisse.component.css']
})
export class CaisseComponent implements OnInit {
  public moyenEncaisse:any
  public Totaljour:any
  public Recujour:any
  public encaisser:any
  public facture_etudiant:any
  public recu_affiche:any
  dtOptions: any = {};
  dtTrigger: Subject<any> = new Subject<any>();
  constructor(private caiisedetail:PaiementService ) { }

  ngOnInit(): void {
    this.caiisedetail.getcaisse().subscribe(data=>{
      console.log(data)
      this.encaisser=data
      console.log(this.encaisser)
    
      this.moyenEncaisse= Math.round((this.encaisser.reduce((total: any, facture: any) => total + facture.montantcredit, 0))/this.encaisser.length) ;
      console.log(this.moyenEncaisse)
      this.montantversertoday(this.encaisser)
    })
   
  }
  filterbydate(){
    console.log("test")
  }
  montantversertoday(factures:any):void{
    const currentDate = new Date();
    const year = currentDate.getFullYear();
    const month = (currentDate.getMonth() + 1).toString().padStart(2, '0'); 
    const day = currentDate.getDate().toString().padStart(2, '0');
    const formattedDate = `${year}-${month}-${day}`;

    console.log(formattedDate); 
   // const facturesAujourdhui = factures.filter((factureparm:any) => factureparm.date_emission === formattedDate);
    // Calculer le montant total des factures filtrées
      const montantTotalAujourdhui = factures.reduce((total:any, facture:any) => total + facture.montantcredit, 0);

      console.log("Montant total encaissé aujourd'hui :", montantTotalAujourdhui);
      this.Totaljour=montantTotalAujourdhui

  }
   pagination(size: any, page: number, element: any) {
    const pageSize = size;
    const currentPageNumber = page;
    const totalElements = element.length;
  
    const startIndex = (currentPageNumber - 1) * pageSize;
    const endIndex = Math.min(startIndex + pageSize, totalElements);
  
    const currentElements = element.slice(startIndex, endIndex);
  
    // Calculer le nombre total de pages
    const totalPages = Math.ceil(totalElements / pageSize);
  
    // Déterminer s'il y a une page précédente
    const hasPreviousPage = currentPageNumber > 1;
  
    // Déterminer s'il y a une page suivante
    const hasNextPage = currentPageNumber < totalPages;
  
    console.log("Page courante :", currentPageNumber);
    console.log("Éléments actuels :", currentElements);
    console.log("Page précédente :", hasPreviousPage);
    console.log("Page suivante :", hasNextPage);
  
    // Vous pouvez également retourner des informations sur la pagination si nécessaire
    return {
      currentElements,
      hasPreviousPage,
      hasNextPage,
      totalPages,
      currentPageNumber,
    };
  }
  sortirecu(iduser:any){
    this.facture_etudiant=this.encaisser.filter((item:any)=> item.id_facture === iduser
    )
    console.log(this.facture_etudiant)
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
