import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { Future, Futures } from '../futures/future';
import { Cash } from '../cash/cash';
import { Loan } from '../loans/loan';
import { Security, Securities } from '../securities/security';
import { BankFacility } from '../bank-facilities/bank-facility';
import { CurrencyPipe, SlicePipe } from '@angular/common';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  title = 'Dashboard';
  public securities: Securities;
  public futures: Futures;
  public loans: Loan[];
  public cash: Cash[];
  public bank_facilities: BankFacility[];
  currentTime;

  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.loadComponent();
    setInterval(() => {
      this.loadComponent();
    }, 1000);
  }

  loadComponent() {
    this.currentTime = new Date();
    this.dataService.getSecurity()
    .subscribe(securities => this.securities = new Securities(securities));
    this.dataService.getFuture()
    .subscribe(futures => this.futures = new Futures(futures));
    this.dataService.getLoan()
    .subscribe(loans => this.loans = loans);
    this.dataService.getCash()
    .subscribe(cash => this.cash = cash);
    this.dataService.getBankFacility()
    .subscribe(bank_facilities => this.bank_facilities = bank_facilities);
  }

}
