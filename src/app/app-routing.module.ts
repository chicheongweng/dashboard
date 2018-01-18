import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SecuritiesComponent } from './securities/securities.component';
import { FuturesComponent } from './futures/futures.component';
import { LoansComponent } from './loans/loans.component';
import { CashComponent } from './cash/cash.component';
import { BankFacilitiesComponent } from './bank-facilities/bank-facilities.component';

const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'securities', component: SecuritiesComponent },
  { path: 'futures', component: FuturesComponent },
  { path: 'loans', component: LoansComponent },
  { path: 'cash', component: CashComponent },
  { path: 'bank-facilities', component: BankFacilitiesComponent }
];
@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
