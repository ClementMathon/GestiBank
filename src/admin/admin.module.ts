import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavadminComponent } from './navadmin/navadmin.component';
import { AffectationComponent } from './affectation/affectation.component';
import { AgentProfileComponent } from './agent-profile/agent-profile.component';

@NgModule({
  imports: [
    CommonModule

  ],

  declarations: [NavadminComponent, AffectationComponent, AgentProfileComponent],
  exports: [
    NavadminComponent
  ]
})
export class AdminModule { }
