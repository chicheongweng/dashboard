import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { Future } from '../futures/future';
import { Cash } from '../cash/cash';
import { Loan } from '../loans/loan';
import { Security } from '../securities/security';
import { BankFacility } from '../bank-facilities/bank-facility';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  title = 'Dashboard';
  constructor(private dataService: DataService) { }

  securities: Security[];
  futures: Future[];
  loans: Loan[];
  cash: Cash[];
  bank_facilities: BankFacility[];

  ngOnInit() {
    this.dataService.getSecurity()
    .subscribe(securities => this.securities = securities);
    this.dataService.getFuture()
    .subscribe(futures => this.futures = futures);
    this.dataService.getLoan()
    .subscribe(loans => this.loans = loans);
    this.dataService.getCash()
    .subscribe(cash => this.cash = cash);
    this.dataService.getBankFacility()
    .subscribe(bank_facilities => this.bank_facilities = bank_facilities);
  }

}
