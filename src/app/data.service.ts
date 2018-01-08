import { Injectable } from '@angular/core';
import { Future } from './futures/future';
import { Cash } from './cash/cash';
import { Loan } from './loans/loan';
import { Security } from './securities/security';
import { BankFacility } from './bank-facilities/bank-facility';

@Injectable()
export class DataService {

  constructor() { }

  public getSecurity(): Security {
    return null;
  }

  public getFuture(): Future {
    return null;
  }

  public getLoan(): Loan {
    return null;
  }

  public getCash(): Cash {
    return null;
  }

  public getBankFacility(): BankFacility {
    return null;
  }

}
