import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { ConnexionService } from '../services/connexion.service';

@Component({
  selector: 'app-connexion',
  templateUrl: './connexion.component.html',
  styleUrls: ['./connexion.component.css']
})
export class ConnexionComponent implements OnInit {
  public resttel:any
  public isnum = false
  public ispwd = false
username=new FormControl()
password = new FormControl()
  info: any;
  url: any;

  constructor(private userconnect:ConnexionService) { }

  ngOnInit(): void {
    console.log("bonjour")
  }
  connecter(){
    this.userconnect.recupone(this.username.value).subscribe(res=>{
      this.info=res
      console.log(this.info)
      if( this.info==false){
        this.isnum=true
        this.ispwd=false
      }
       else if (this.info[0].mdp==this.password.value) {
        sessionStorage.setItem('isconnect',"true")
        sessionStorage.setItem('iduser',this.info[0].id_personnel)
        this.url=sessionStorage.getItem('iduser')
        console.log(this.url)
        location.href = `https://digirec-jrqe.vercel.app/dashboard/${this.url}`;
      }
      else{
        this.isnum=false
        this.ispwd=true
        console.log("hello")
      }
    })
  }
}
