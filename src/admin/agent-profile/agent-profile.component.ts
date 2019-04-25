import { Component, OnInit } from '@angular/core';
import { NgModule } from '@angular/core';
import { MatFormFieldModule } from '@angular/material/form-field';
@Component({
  selector: 'app-agent-profile',
  templateUrl: './agent-profile.component.html',
  styleUrls: ['./agent-profile.component.scss']
})
@NgModule({
  imports: [
    MatFormFieldModule
  ]})
export class AgentProfileComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
