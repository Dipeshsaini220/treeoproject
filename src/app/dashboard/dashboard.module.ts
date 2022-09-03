import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from '../login/login.component';
import { DashboardRoutingModule } from './dashboard-routing.modult';


@NgModule({
  declarations: [
    LoginComponent
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule
  ]
})
export class DashboardModule { 
  constructor(){
    console.log('dashboard module loaded')
  }
}
