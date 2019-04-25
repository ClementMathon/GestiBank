import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClientComponent } from './client.component';
import { ComptesClientComponent } from './comptes-client/comptes-client.component';
import { VirementClientComponent } from './virement-client/virement-client.component';
import { ProfilClientComponent } from './profil-client/profil-client.component';
import { HistoriqueClientComponent } from './historique-client/historique-client.component';
import { CommandesClientComponent } from './commandes-client/commandes-client.component';
import { NotificationsClientComponent } from './notifications-client/notifications-client.component';
import { SidebarClientComponent } from './sidebar-client/sidebar-client.component';
import { ClientLayoutComponent } from './client-layout/client-layout.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    ClientComponent, 
    ComptesClientComponent, 
    VirementClientComponent, 
    ProfilClientComponent, 
    HistoriqueClientComponent, 
    CommandesClientComponent, 
    NotificationsClientComponent, 
    SidebarClientComponent,
    ClientLayoutComponent
  ]
})
export class ClientModule { }
