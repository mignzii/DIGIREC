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
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatInputModule} from '@angular/material/input';
import { NgxPrintElementModule } from 'ngx-print-element';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {MatSortModule} from '@angular/material/sort';
import {MatTableModule} from '@angular/material/table';
import {MatMenuModule} from '@angular/material/menu';
import { DataTablesModule } from "angular-datatables";
import {NgxPrintModule} from 'ngx-print';
import { SidebarComponent } from './sidebar/sidebar.component';
import { PremieretrancheComponent } from './premieretranche/premieretranche.component';
import { SecondtrancheComponent } from './secondtranche/secondtranche.component';
import { TroisiemetrancheComponent } from './troisiemetranche/troisiemetranche.component';
import { DebiteurpartrancheComponent } from './debiteurpartranche/debiteurpartranche.component';
import { DropdownComponent } from './dropdown/dropdown.component';
import { EtudiantComponent } from './etudiant/etudiant.component';
import { DroitephotoComponent } from './droitephoto/droitephoto.component';
import { ParametreComponent } from './parametre/parametre.component';
import { EcriturecomptableComponent } from './ecriturecomptable/ecriturecomptable.component';
import { HistoriqueetudiantComponent } from './historiqueetudiant/historiqueetudiant.component';
import { PaginationPipePipe } from './pagination-pipe.pipe';
import { ExporttoexelComponent } from './exporttoexel/exporttoexel.component';
import { ModifprofilComponent } from './modifprofil/modifprofil.component';

const appRoutes : Routes =[
  {path:'',component:PageacceuilComponent},
  {path:'page-accueil',component:PageacceuilComponent},
  {path:'connexion',component:ConnexionComponent},
  {path:'recherche',component:RechercheComponent},
  {path:'facturation',component:FacturationComponent},
  {path:'versement/:numcomptable',component:VersementComponent},
  {path:'etudiant',component:ListeDesEtudiantsComponent},
  {path:'debiteur',component:ListeEtudiantComponent},
  {path:'recouvrement',component:ReccouvrementComponent},
  {path:'recu/:code/:mont/:libelle/:date',component:RecuComponent},
  {path:'dashboard/:num',component:TableaudebordComptableComponent},
  {path:'statistique',component:StatistiquesComponent},
  {path:'profil/:id',component:ProfilComponent},
  {path:'premieretranche',component:PremieretrancheComponent},
  {path:'secondtranche',component:SecondtrancheComponent},
  {path:'troisiemetranche',component:TroisiemetrancheComponent},
  {path:'debiteurpartranche',component:DebiteurpartrancheComponent},
  {path:'ajoutetudiant',component:EtudiantComponent},
  {path:'parametre',component:ParametreComponent},
  {path:'ecriture',component:EcriturecomptableComponent},
  {path:'historiqueetudiant/:idetudiant',component:HistoriqueetudiantComponent},
  {path:'exporttoexcel',component:ExporttoexelComponent},
  {path:'modifier/:idetudiant',component:ModifprofilComponent}
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
    ListeEtudiantComponent,StatistiquesComponent,
    ReccouvrementComponent,TableaudebordComptableComponent,
    ProfilComponent,
    SidebarComponent,
    PremieretrancheComponent,
    SecondtrancheComponent,
    TroisiemetrancheComponent,
    DebiteurpartrancheComponent,
    DropdownComponent,
    EtudiantComponent,
    DroitephotoComponent,
    ParametreComponent,
    EcriturecomptableComponent,
    HistoriqueetudiantComponent,
    PaginationPipePipe,
    ExporttoexelComponent,
    ModifprofilComponent
  ],
  imports: [
    BrowserModule,MatProgressSpinnerModule,NgxPrintModule,NgxPrintElementModule,
    RouterModule.forRoot(appRoutes),ReactiveFormsModule,HttpClientModule,RouterModule, BrowserAnimationsModule,MatInputModule,
    MatPaginatorModule,MatSortModule,MatTableModule,DataTablesModule,MatMenuModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
