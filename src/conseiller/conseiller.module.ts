import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ComptesClientsComponent } from './comptes-clients/comptes-clients.component';
import { StatistiquesComponent } from './statistiques/statistiques.component';
import { RechercheComponent } from './recherche/recherche.component';
import { UtilisateursComponent } from './utilisateurs/utilisateurs.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [ComptesClientsComponent, StatistiquesComponent, RechercheComponent, UtilisateursComponent]
})
export class ConseillerModule { }
