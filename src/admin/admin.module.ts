import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavadminComponent } from './navadmin/navadmin.component';
import { AffectationComponent } from './affectation/affectation.component';
import { AgentProfileComponent } from './agent-profile/agent-profile.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { GestiondesagentsComponent } from './gestiondesagents/gestiondesagents.component';
import { SidebaradminComponent } from './sidebaradmin/sidebaradmin.component';
@NgModule({
  imports: [
    CommonModule,
MatFormFieldModule
  ],

  declarations: [NavadminComponent, AffectationComponent, AgentProfileComponent, GestiondesagentsComponent, SidebaradminComponent],
  exports: [
    NavadminComponent
  ]
})
export class AdminModule { }
