import { Component, OnInit } from '@angular/core';

declare const $: any;
declare interface RouteInfo {
    path: string;
    title: string;
    icon: string;
    class: string;
}
export const ROUTES: RouteInfo[] = [
    { path: '/', title: 'client',  icon: 'dashboard', class: '' },
    { path: '/comptes-client', title: 'Comptes Client',  icon:'person', class: '' },
    { path: '/virement-client', title: 'Virement Client',  icon:'person', class: '' },
    { path: '/profil-client', title: 'Profil Client',  icon:'content_paste', class: '' },
    { path: '/historique-client', title: 'Historique Client',  icon:'library_books', class: '' },
    { path: '/commandes-client', title: 'Commandes Client',  icon:'bubble_chart', class: '' },
    { path: '/notifications-client', title: 'Notifications Client',  icon:'notifications', class: '' },
];
@Component({
  selector: 'app-sidebar-client',
  templateUrl: './sidebar-client.component.html',
  styleUrls: ['./sidebar-client.component.scss']
})
export class SidebarClientComponent implements OnInit {
  menuItems: any[];

  constructor() { }

  /*ngOnInit() {
    this.menuItems = ROUTES.filter(menuItem => menuItem);
  }*/
  isMobileMenu() {
      if ($(window).width() > 991) {
          return false;
      }
      return true;
  };
}
