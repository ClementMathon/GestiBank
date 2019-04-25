import { Component, OnInit } from '@angular/core';
declare const $: any;
declare interface RouteInfo {
  path: string;
  title: string;
  icon: string;
  class: string;
}
export const ROUTES: RouteInfo[] = [
  { path: '/GestionAgent', title: 'Gestion des agents', icon: 'dashboard', class: '' },
  { path: '/affectation', title: 'affectation Agents', icon: 'person', class: '' },
  { path: '/Creationagent', title: 'greation agent', icon: 'content_paste', class: '' },
  { path: '/deconnecter', title: 'Deconnecter', icon: 'library_books', class: '' }

];
@Component({
  selector: 'app-navadmin',
  templateUrl: './navadmin.component.html',
  styleUrls: ['./navadmin.component.scss']
})

export class NavadminComponent implements OnInit {

  menuItems: any[];

  constructor() { }

  ngOnInit() {
    this.menuItems = ROUTES.filter(menuItem => menuItem);
  }
  isMobileMenu() {
    if ($(window).width() > 991) {
      return false;
    }
    return true;
  };

}






