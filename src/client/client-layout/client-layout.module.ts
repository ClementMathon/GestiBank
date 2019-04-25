import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClientLayoutComponent } from './client-layout.component';
import { ClientModule } from '../../../misc/sourceModules/client/client.module';

@NgModule({
  imports: [
    CommonModule,
    ClientModule,
  ],
  declarations: [ClientLayoutComponent]
})
export class ClientLayoutModule { }
