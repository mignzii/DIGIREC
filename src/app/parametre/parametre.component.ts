import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { InfoUtilisateurService } from '../services/info-utilisateur.service';

@Component({
  selector: 'app-parametre',
  templateUrl: './parametre.component.html',
  styleUrls: ['./parametre.component.css']
})
export class ParametreComponent implements OnInit {

  constructor(private personnel:InfoUtilisateurService) { }
public serveurresponse:any
public serveurside:any
fichierAEnvoyer: File | null =null
  ngOnInit(): void {
  }
  login=new FormControl()
  password=new FormControl()
  ancienpass=new FormControl()
  public test=sessionStorage.getItem('iduser')
  update(){
    this.personnel.envoie={
      login:this.login.value,
      id:this.test,
      password:this.password.value,
      ancienpass:this.ancienpass.value
    }
    this.personnel.miseajour().subscribe(data=>{
      console.log(data)
      this.serveurresponse=data
    })

  }
  onFileSelect(event:any) {
    if (event.target.files.length > 0) {
       this.fichierAEnvoyer = event.target.files[0];
     console.log(this.fichierAEnvoyer)
    }
  }
  updateprofil(){
    this.personnel.data.append("id", sessionStorage.getItem('iduser'))
    this.personnel.data.append("image",this.fichierAEnvoyer)
    this.personnel.miseajourphoto().subscribe((data)=>{
      console.log(data) 
      this.serveurside=data
    })
  }

}
