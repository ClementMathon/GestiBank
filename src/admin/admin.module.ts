import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavadminComponent } from './navadmin/navadmin.component';

@NgModule({
  imports: [
    CommonModule

  ],

  declarations: [NavadminComponent],
  exports: [
    NavadminComponent
  ]
})
export class AdminModule { }
