import { Component, OnInit } from '@angular/core';
import { DownloadfileService } from '../services/downloadfile.service';
import { InfoUtilisateurService } from '../services/info-utilisateur.service';
import { FormControl } from '@angular/forms';
import Swal from 'sweetalert2'

@Component({
  selector: 'app-statistiques',
  templateUrl: './statistiques.component.html',
  styleUrls: ['./statistiques.component.css']
})
export class StatistiquesComponent implements OnInit {
public url:any
public res:any

  constructor(private utilisateur:InfoUtilisateurService , private downloadfile:DownloadfileService) { }

  ngOnInit(): void {
    this.url=sessionStorage.getItem('iduser')
    this.utilisateur.recupinfo(this.url).subscribe(data=>{
      this.res=data
      console.log(this.res)

    })
  }
  annee=new FormControl()
  page=new FormControl()
 
  onDownloadClick() {
    this.downloadfile.downloadFile().subscribe(data => { 
      console.log(data)
      Swal.fire({
        text: "Voulez vous vraiment Télécharger ce fichier ?",
        icon: 'info',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Oui!'
      }).then((result) => {
        if(result.isConfirmed){
          this.onDownloadClicktoast()
        }
        
      })
        // The file is received, create a link to download it
      
    });
  }
  onDownloadClick2() {
    this.downloadfile.createfiletranche().subscribe(data => { 
      console.log(data)
      Swal.fire({
        text: "Voulez vous vraiment Télécharger ce fichier ?",
        icon: 'info',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Oui!'
      }).then((result) => {
        if(result.isConfirmed){
          this.onDownloadClicktoast2()
        }
        
      })
        // The file is received, create a link to download it
      
    });
  }
  onDownloadClick3() {
    this.downloadfile.createfileCA().subscribe(data => { 
      console.log(data)
      Swal.fire({
        text: "Voulez vous vraiment Télécharger ce fichier ?",
        icon: 'info',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Oui!'
      }).then((result) => {
        if(result.isConfirmed){
          this.onDownloadClickCA()
        }
        
      })
        // The file is received, create a link to download it
      
    });
  }
  onDownloadClicktoast() {
    this.downloadfile.downloadFiletrue().subscribe(event => { 
        // The file is received, create a link to download it
        const link = document.createElement('a');
        link.href = URL.createObjectURL(event);
        link.download = 'EcritureComptable.xlsx'; // Set the file name

        // Add the link to the DOM and click it to download the file
        document.body.appendChild(link);
        link.click();
      
    });
  }
  onDownloadClicktoast2() {
    this.downloadfile.downloadFileteanche().subscribe(event => { 
        // The file is received, create a link to download it
        const link = document.createElement('a');
        link.href = URL.createObjectURL(event);
        link.download = 'tranche.xlsx'; // Set the file name

        // Add the link to the DOM and click it to download the file
        document.body.appendChild(link);
        link.click();
      
    });
  }

  onDownloadClickCA() {
    this.downloadfile.downloadFileCA().subscribe(event => { 
        // The file is received, create a link to download it
        const link = document.createElement('a');
        link.href = URL.createObjectURL(event);
        link.download = 'Chiffre_Affaire.xlsx'; // Set the file name

        // Add the link to the DOM and click it to download the file
        document.body.appendChild(link);
        link.click();
      
    });
  }
  putparameter(){
    // j'utilise le localstoarge pour stocker l'annee et la page 
    localStorage.setItem('anne',this.annee.value)
    localStorage.setItem('page',this.page.value)
    
  }

}
