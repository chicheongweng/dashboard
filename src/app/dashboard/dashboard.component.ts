import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { Futures } from '../futures/future';
import { Cash } from '../cash/cash';
import { Loan } from '../loans/loan';
import { Securities } from '../securities/security';
import { BankFacility } from '../bank-facilities/bank-facility';
import { environment } from '../../environments/environment';
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
  private params;
  envName: string;

  constructor(private dataService: DataService) {
    this.params = environment.params;
    this.envName = environment.name;
  }

  ngOnInit() {
    this.currentTime = new Date();
    this.loadSecurities();
    this.loadFutures();
    this.loadComponent();
    setInterval(() => {
      this.currentTime = new Date();
      this.loadSecurities();
      this.loadFutures();
    }, 2000);
  }

  loadSecurities() {
    this.dataService.getSecurity(this.params).then(securities => {
      this.securities = new Securities(securities.items);
    });
  }

  loadFutures() {
    this.dataService.getFuture(this.params).then(futures => {
      this.futures = new Futures(futures.items);
    });
  }

  loadComponent() {
    this.dataService.getLoan()
    .subscribe(loans => this.loans = loans);
    this.dataService.getCash()
    .subscribe(cash => this.cash = cash);
    this.dataService.getBankFacility()
    .subscribe(bank_facilities => this.bank_facilities = bank_facilities);
  }

}
