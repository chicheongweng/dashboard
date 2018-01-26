import { Injectable } from '@angular/core';
import { Cash } from './cash/cash';
import { Loan } from './loans/loan';
import { Security } from './securities/security';
import { Future } from './futures/future';
import { BankFacility } from './bank-facilities/bank-facility';
import { CASH, BANK_FACILITIES } from './mock-data';
import { getLoans } from './mock-data';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { HttpClient } from '@angular/common/http';
import { environment } from '../environments/environment';
import { DataTableParams } from 'angular-4-data-table/src/index';
// reference https://alligator.io/angular/httpclient-intro/
// reference https://yakovfain.com/2018/01/03/wrapping-an-rxjs-observable-stream-into-an-angular-service/?utm_campaign=NG-Newsletter&utm_medium=email&utm_source=NG-Newsletter_235

function paramsToQueryString(params: DataTableParams) {
  const result = [];

  if (params == null) {
    return null;
  }

  if (params.offset != null) {
    result.push(['_start', params.offset]);
  }
  if (params.limit != null) {
    result.push(['_limit', params.limit]);
  }
  if (params.sortBy != null) {
    result.push(['_sort', params.sortBy]);
  }
  if (params.sortAsc != null) {
    result.push(['_order', params.sortAsc ? 'ASC' : 'DESC']);
  }

  return result.map(param => param.join('=')).join('&');
}
@Injectable()
export class DataService {
  private apiUrl;

  constructor(private httpClient: HttpClient) {
    this.apiUrl = environment.apiUrl;
  }

  private constructUrl(params, product: string) {
    return params ? this.apiUrl + '/' + product + '?' + paramsToQueryString(params) : this.apiUrl + '/' + product;
  }

  public getSecurity(params: DataTableParams): Observable<any> {
    return this.httpClient.get<Security[]>(this.constructUrl(params, 'securities'), { observe: 'response' });
  }

  public getFuture(params: DataTableParams): Observable<any> {
    return this.httpClient.get<Future[]>(this.constructUrl(params, 'futures'), { observe: 'response' });
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
