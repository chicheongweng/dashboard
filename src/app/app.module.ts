import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { SecuritiesComponent } from './securities.component';
import { FuturesComponent } from './futures.component';
import { LoansComponent } from './loans.component';
import { CashComponent } from './cash.component';
import { BankFacilitiesComponent } from './bank-facilities.component';


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
