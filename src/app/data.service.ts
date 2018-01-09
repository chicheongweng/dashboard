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

  public getSecurity(): Observable<Security[]> {
    return of(SECURITIES);
  }

  public getFuture(): Observable<Future[]> {
    return of(FUTURES);
  }

  public getLoan(): Observable<Loan[]> {
    return of(LOANS);
  }

  public getCash(): Observable<Cash[]> {
    return of(CASH);
  }

  public getBankFacility(): Observable<BankFacility[]> {
    return of(BANK_FACILITIES);
  }

}
