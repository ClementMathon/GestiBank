import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClientLayoutComponent } from './client-layout.component';

import { NavbarComponent } from 'app/components/navbar/navbar.component';
import { ClientModule } from 'client/client.module';

@NgModule({
  imports: [
    CommonModule,
    ClientModule,
  ],
  declarations: [
    ClientLayoutComponent,
    NavbarComponent,  
  ]
})
export class ClientLayoutModule { }
