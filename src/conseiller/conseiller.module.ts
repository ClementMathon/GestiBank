import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ComptesClientsComponent } from './comptes-clients/comptes-clients.component';
import { StatistiquesComponent } from './statistiques/statistiques.component';
import { RechercheComponent } from './recherche/recherche.component';
import { UtilisateursComponent } from './utilisateurs/utilisateurs.component';
import { SidebarConseillerComponent } from './sidebar-conseiller/sidebar-conseiller.component';
import { FooterConseillerComponent } from './footer-conseiller/footer-conseiller.component';
import { NavbarConseillerComponent } from './navbar-conseiller/navbar-conseiller.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [ComptesClientsComponent, StatistiquesComponent, RechercheComponent, UtilisateursComponent, SidebarConseillerComponent, FooterConseillerComponent, NavbarConseillerComponent]
})
export class ConseillerModule { }
