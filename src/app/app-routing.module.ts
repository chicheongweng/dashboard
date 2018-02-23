import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SecuritiesComponent } from './securities/securities.component';
import { FuturesComponent } from './futures/futures.component';
import { LoansComponent } from './loans/loans.component';
import { CashComponent } from './cash/cash.component';
import { BankFacilitiesComponent } from './bank-facilities/bank-facilities.component';
import { ProfileComponent } from './profile/profile.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { LoggedInGuard } from './authentication/logged-in.guard';

const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'welcome', component: WelcomeComponent },
  { path: 'dashboard', component: DashboardComponent, canActivate: [LoggedInGuard] },
  { path: 'securities', component: SecuritiesComponent, canActivate: [LoggedInGuard] },
  { path: 'futures', component: FuturesComponent, canActivate: [LoggedInGuard] },
  { path: 'loans', component: LoansComponent, canActivate: [LoggedInGuard] },
  { path: 'cash', component: CashComponent, canActivate: [LoggedInGuard] },
  { path: 'profile', component: ProfileComponent, canActivate: [LoggedInGuard] },
  { path: 'bank-facilities', component: BankFacilitiesComponent, canActivate: [LoggedInGuard] }
];
@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
