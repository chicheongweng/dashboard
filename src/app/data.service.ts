import { Injectable } from '@angular/core';
import { Future } from './futures/future';
import { Cash } from './cash/cash';
import { Loan } from './loans/loan';
import { Security } from './securities/security';
import { BankFacility } from './bank-facilities/bank-facility';
import { SECURITIES, FUTURES, LOANS, CASH, BANK_FACILITIES } from './mock-data';
import { getSecurities, getFutures, getLoans} from './mock-data';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { Http } from '@angular/http';
import { HttpClient } from '@angular/common/http';
import { environment } from '../environments/environment';
@Injectable()
export class DataService {
  private apiUrl;

  constructor(private http: HttpClient) {
    this.apiUrl = environment.apiUrl;
  }

  public getSecurity(): Observable<Security[]> {
    return this.http.get<Security[]>(this.apiUrl + '/securities');
  }

  public getFuture(): Observable<Future[]> {
    return this.http.get<Future[]>(this.apiUrl + '/futures');
  }

  public getLoan(): Observable<Loan[]> {
    return of(getLoans());
  }

  public getCash(): Observable<Cash[]> {
    return of(CASH);
  }

  public getBankFacility(): Observable<BankFacility[]> {
    return of(BANK_FACILITIES);
  }

}
