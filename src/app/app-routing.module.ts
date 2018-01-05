import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';
import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard.component';
import { SecuritiesComponent } from './securities.component';
import { FuturesComponent } from './futures.component';
import { LoansComponent } from './loans.component';
import { CashComponent } from './cash.component';
import { BankFacilitiesComponent } from './bank-facilities.component';

const routes: Routes = [
  { path: '', component: DashboardComponent }
];

 @NgModule({
  imports: [
    CommonModule
  ],
  declarations: []
})
export class AppRoutingModule { }
