import { Component, OnInit } from '@angular/core';

declare const $: any;
declare interface RouteInfo {
  path: string;
  title: string;
  icon: string;
  class: string;
}
export const ROUTES: RouteInfo[] = [
  { path: '/Gestiondesagent', title: 'agent', icon: 'dashboard', class: '' },
  { path: '/affectation', title: 'User Profile', icon: 'person', class: '' },
  { path: '/agentcréation', title: 'Agent', icon: 'content_paste', class: '' },
  { path: '/medéconnecter', title: 'deconnecter', icon: 'library_books', class: '' },

];

@Component({
  selector: 'app-sidebaradmin',
  templateUrl: './sidebaradmin.component.html',
  styleUrls: ['./sidebaradmin.component.scss']
})
export class SidebaradminComponent implements OnInit {
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
