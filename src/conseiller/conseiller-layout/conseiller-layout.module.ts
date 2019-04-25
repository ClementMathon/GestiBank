import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CoseillerLayoutComponent } from './coseiller-layout/coseiller-layout.component';
import { ConseillerLayoutComponent } from './conseiller-layout.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [CoseillerLayoutComponent, ConseillerLayoutComponent]
})
export class ConseillerLayoutModule { }
