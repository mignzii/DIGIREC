import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { EtudiantsService } from '../services/etudiants.service';

@Component({
  selector: 'app-recu',
  templateUrl: './recu.component.html',
  styleUrls: ['./recu.component.css']
})
export class RecuComponent implements OnInit {

  constructor(private route:ActivatedRoute , public info:EtudiantsService) { }
  public user=sessionStorage.getItem('iduser')
code=this.route.snapshot.params['code']
montant=this.route.snapshot.params['mont']
libelle=this.route.snapshot.params['libelle']
res:any
  ngOnInit(): void {

    this.info.recupinfoetudiant(this.code).subscribe(data=>{
      this.res=data
    })
    console.log(this.user)
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
