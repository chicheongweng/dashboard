import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { SecuritiesComponent } from './securities/securities.component';
import { FuturesComponent } from './futures/futures.component';
import { LoansComponent } from './loans/loans.component';
import { CashComponent } from './cash/cash.component';
import { BankFacilitiesComponent } from './bank-facilities/bank-facilities.component';


@NgModule({
  declarations: [
    AppComponent,
    SecuritiesComponent,
    FuturesComponent,
    LoansComponent,
    CashComponent,
    BankFacilitiesComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
