import { NgModule } from '@angular/core';
import { CommonModule, } from '@angular/common';
import { BrowserModule  } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';

import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';
import { ClientLayoutComponent } from 'client/client-layout/client-layout.component';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { ClientComponent } from 'client/client.component';
import { CommandesClientComponent } from 'client/commandes-client/commandes-client.component';
import { ComptesClientComponent } from 'client/comptes-client/comptes-client.component';

const routes: Routes = [

  {path: '',      component: AppComponent },
  {path: 'client',  component: ClientLayoutComponent},
    
  
]
  /*
  
  {
    path: 'adminLayout',
    component: AdminLayoutComponent,
    children: [
        {
      path: '',
      loadChildren: './layouts/admin-layout/admin-layout.module#AdminLayoutModule'
  }]},

  {
    path: '',
    component: ConseillerModule,
    children: [
        {
      path: '',
      loadChildren: 'Gestibank/src/conseiller/conseiller.module'
  }]},

  {
    path: 'admin',
    component: AdminModule,
    children: [
        {
      path: '',
      loadChildren: 'Gestibank/src/admin/admin.module'
  }]},

  {
    path: 'client',
    component: ClientLayoutComponent,
    children: [
        {
      path: '',
      loadChildren: 'Gestibank/src/client/client-layout/client-layout.module#clientLayoutModule'
  }]}
    // { path: 'dashboard',      component: DashboardComponent },
    // { path: 'user-profile',   component: UserProfileComponent },
    // { path: 'table-list',     component: TableListComponent },
    // { path: 'typography',     component: TypographyComponent },
    // { path: 'icons',          component: IconsComponent },
    // { path: 'maps',           component: MapsComponent },
    // { path: 'notifications',  component: NotificationsComponent },
    // { path: 'upgrade',        component: UpgradeComponent },
    // { path: '',               redirectTo: 'dashboard', pathMatch: 'full' }
];
*/
@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    RouterModule.forRoot(routes)
  ],
  exports: [
  ],
})
export class AppRoutingModule { }
