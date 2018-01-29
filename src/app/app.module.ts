import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { SecuritiesComponent } from './securities/securities.component';
import { FuturesComponent } from './futures/futures.component';
import { LoansComponent } from './loans/loans.component';
import { CashComponent } from './cash/cash.component';
import { BankFacilitiesComponent } from './bank-facilities/bank-facilities.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AmountComponent } from './amount/amount.component';
import { AppRoutingModule } from './/app-routing.module';
import { DataService } from './data.service';
import { DataTableModule } from 'angular-4-data-table/src/index';
import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    AmountComponent,
    SecuritiesComponent,
    FuturesComponent,
    LoansComponent,
    CashComponent,
    BankFacilitiesComponent,
    DashboardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    DataTableModule,
    HttpModule,
    HttpClientModule
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
