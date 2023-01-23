import { Component, OnInit } from '@angular/core';
import { DownloadfileService } from '../services/downloadfile.service';
import { InfoUtilisateurService } from '../services/info-utilisateur.service';
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
  onDownloadClick() {
    this.downloadfile.downloadFile().subscribe(data => { 
      console.log(data)
      Swal.fire({
        text: "Voulez vous vraiment Télécharger ce fichier ?",
        icon: 'info',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes, delete it!'
      }).then(() => {
        this.onDownloadClicktoast()
      })
        // The file is received, create a link to download it
      
    });
  }
  onDownloadClicktoast() {
    this.downloadfile.downloadFiletrue().subscribe(event => { 
        // The file is received, create a link to download it
        const link = document.createElement('a');
        link.href = URL.createObjectURL(event);
        link.download = 'Chiffre_Affaire.xlsx'; // Set the file name

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

}
