import { Injectable } from '@angular/core';
import { Future } from './futures/future';
import { Cash } from './cash/cash';
import { Loan } from './loans/loan';
import { Security } from './securities/security';
import { BankFacility } from './bank-facilities/bank-facility';
import { SECURITIES, FUTURES, LOANS, CASH, BANK_FACILITIES } from './mock-data';

import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';

@Injectable()
export class DataService {

  constructor() { }

  public getSecurity(): Observable<Security> {
    return null;
  }

  public getFuture(): Observable<Future> {
    return null;
  }

  public getLoan(): Observable<Loan> {
    return null;
  }

  public getCash(): Observable<Cash> {
    return null;
  }

  public getBankFacility(): Observable<BankFacility> {
    return null;
  }

}
