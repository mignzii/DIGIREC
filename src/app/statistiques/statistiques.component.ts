import { Component, OnInit } from '@angular/core';
import { DownloadfileService } from '../services/downloadfile.service';
import { InfoUtilisateurService } from '../services/info-utilisateur.service';

@Component({
  selector: 'app-statistiques',
  templateUrl: './statistiques.component.html',
  styleUrls: ['./statistiques.component.css']
})
export class StatistiquesComponent implements OnInit {
public url:any
public res:any
downloadProgress: number=0;


  constructor(private utilisateur:InfoUtilisateurService , private downloadfile:DownloadfileService) { }

  ngOnInit(): void {
    this.url=sessionStorage.getItem('iduser')
    this.utilisateur.recupinfo(this.url).subscribe(data=>{
      this.res=data
      console.log(this.res)

    })
  }
  onDownloadClick() {
    this.downloadfile.downloadFile().subscribe(event => { 
        // The file is received, create a link to download it
        const link = document.createElement('a');
        link.href = URL.createObjectURL(event);
        link.download = 'EcritureComptable.xlsx'; // Set the file name

        // Add the link to the DOM and click it to download the file
        document.body.appendChild(link);
        link.click();
      
    });
  }
  onDownloadClickCA() {
    this.downloadfile.downloadFile().subscribe(event => { 
        // The file is received, create a link to download it
        const link = document.createElement('a');
        link.href = URL.createObjectURL(event);
        link.download = 'Chiffre_Affaire.xlsx'; // Set the file name

        // Add the link to the DOM and click it to download the file
        document.body.appendChild(link);
        link.click();
      
    });
  }

}
