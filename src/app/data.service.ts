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
import { Http, Response } from '@angular/http';
import { HttpClient } from '@angular/common/http';
import { environment } from '../environments/environment';
import { DataTableParams } from 'angular-4-data-table/src/index';

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

  constructor(private http: Http, private httpClient: HttpClient) {
    this.apiUrl = environment.apiUrl;
  }

  public getSecurity(params?: DataTableParams ) {
    const url = params ? this.apiUrl + '/securities?' + paramsToQueryString(params) : this.apiUrl + '/securities';
    return this.http.get(url).toPromise()
    .then((resp: Response) => ({
        items: resp.json(),
        itemCount: Number(resp.headers.get('X-Total-Count'))
    }));
  }

  public getFuture(params: DataTableParams ) {
    const url = params ? this.apiUrl + '/futures?' + paramsToQueryString(params) : this.apiUrl + '/futures';
    return this.http.get(url).toPromise()
    .then((resp: Response) => ({
        items: resp.json(),
        itemCount: Number(resp.headers.get('X-Total-Count'))
    }));
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
