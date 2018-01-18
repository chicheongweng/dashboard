import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { Futures } from '../futures/future';
import { Cash } from '../cash/cash';
import { Loan } from '../loans/loan';
import { Securities } from '../securities/security';
import { BankFacility } from '../bank-facilities/bank-facility';

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
    this.dataService.getSecurity(null).then(securities => {
      this.securities = new Securities(securities.items);
      console.log('securities daily = ', this.securities.getDaily());
    });
    this.dataService.getFuture(null).then(futures => {
      this.futures = new Futures(futures.items);
      console.log('futures daily = ', this.securities.getDaily());
    });
    this.dataService.getLoan()
      .subscribe(loans => this.loans = loans);
    this.dataService.getCash()
      .subscribe(cash => this.cash = cash);
    this.dataService.getBankFacility()
      .subscribe(bank_facilities => this.bank_facilities = bank_facilities);
  }

}
