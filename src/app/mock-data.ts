
import { Future } from './futures/future';
import { Cash } from './cash/cash';
import { Loan } from './loans/loan';
import { Security } from './securities/security';
import { BankFacility } from './bank-facilities/bank-facility';

export const FUTURES: Future[] = [
  {
    account_executive: '1234',
    daily_turnover: 100000,
    accumulated_turnover: 8000000
  },
  {
    account_executive: '5678',
    daily_turnover: 990000,
    accumulated_turnover: 89730000
  }
];

export const SECURITIES: Security[] = [
  {
    account_executive: '1234',
    daily_turnover: 100000,
    accumulated_turnover: 8000000
  },
  {
    account_executive: '5678',
    daily_turnover: 103900,
    accumulated_turnover: 89720000
  }
];

export const CASH: Cash[] = [
  {
    cash: 999999
  }
];
export const LOANS: Loan[] = [
  {
    term: 1000000,
    mortgage_house: 2000000,
    mortgage_marketing: 3000000,
    personal: 4000000,
    margin: 5000000,
    advanced: 6000000
  }
];

export const BANK_FACILITIES: BankFacility[] = [
  {
    utilized: 1000000,
    unutilized: 2000000
  }
];
