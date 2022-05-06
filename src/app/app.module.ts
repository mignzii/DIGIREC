import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Routes,RouterModule} from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { PageacceuilComponent } from './pageacceuil/pageacceuil.component';
import { ConnexionComponent } from './connexion/connexion.component';
import { RechercheComponent } from './recherche/recherche.component';
import { FacturationComponent } from './facturation/facturation.component';
import { VersementComponent } from './versement/versement.component';
import { ListeDesEtudiantsComponent } from './liste-des-etudiants/liste-des-etudiants.component';
import { RecrouvementComponent } from './recrouvement/recrouvement.component';
import { ListeEtudiantComponent } from './liste-etudiant/liste-etudiant.component';
import { ReccouvrementComponent } from './reccouvrement/reccouvrement.component';
import { RecuComponent } from './recu/recu.component';
import { TableaudebordComptableComponent } from './tableaudebord-comptable/tableaudebord-comptable.component';
import { StatistiquesComponent } from './statistiques/statistiques.component';
import { ProfilComponent } from './profil/profil.component';

const appRoutes : Routes =[
  {path:'page-acceuil',component:PageacceuilComponent},
  {path:'connexion',component:ConnexionComponent},
  {path:'recherche',component:RechercheComponent},
  {path:'facturation',component:FacturationComponent},
  {path:'versement/:numcomptable',component:VersementComponent},
  {path:'etudiant',component:ListeDesEtudiantsComponent},
  {path:'debiteur',component:ListeEtudiantComponent},
  {path:'recouvrement',component:ReccouvrementComponent},
  {path:'recu',component:RecuComponent},
  {path:'dashboard/:num',component:TableaudebordComptableComponent},
  {path:'statistique',component:StatistiquesComponent},
  {path:'profil',component:ProfilComponent},

]

@NgModule({
  declarations: [
    AppComponent,
    PageacceuilComponent,
    ConnexionComponent,
    RechercheComponent,
    FacturationComponent,
    VersementComponent,
    ListeDesEtudiantsComponent,
    RecrouvementComponent,
    ListeEtudiantComponent,
    ReccouvrementComponent,TableaudebordComptableComponent,
    ProfilComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),ReactiveFormsModule,HttpClientModule,RouterModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
