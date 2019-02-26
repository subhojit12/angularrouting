import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import{ DashboardComponent } from './dashboard/dashboard.component';
import { LoginComponent } from './login/login.component';
import { LogoutComponent } from './logout/logout.component';
import { HomePageComponent } from './home-page/home-page.component';

const routes: Routes = [
  {
    path:'login',
    component:LoginComponent
  },
  {
    path:'homepage',
    component:HomePageComponent
  },
  {
    path:'logout',
    component:LogoutComponent
  },
  {
    path:'dashboard',
    component:DashboardComponent
  },
  {
    path:'',
    redirectTo:'/logout',
    pathMatch:'full'
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
