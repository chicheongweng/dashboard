
import { Future } from './futures/future';
import { Cash } from './cash/cash';
import { Loan } from './loans/loan';
import { Security } from './securities/security';
import { BankFacility } from './bank-facilities/bank-facility';

function getRandomFloat(min, max) {
  return Math.floor(Math.random() * (max - min) + min);
}

function getRandomInt(min, max) {
  return Math.floor(getRandomFloat(min, max));
}

export const FUTURES: Future[] = [
  {
    account_executive: '1234',
    daily_turnover: getRandomInt(5000, 5000000),
    accumulated_turnover: getRandomInt(5000, 5000000)
  },
  {
    account_executive: '5678',
    daily_turnover: getRandomInt(5000, 5000000),
    accumulated_turnover: getRandomInt(5000, 5000000)
  }
];

export const SECURITIES: Security[] = [
  {
    account_executive: '1234',
    daily_turnover: getRandomInt(5000, 5000000),
    accumulated_turnover: getRandomInt(5000, 5000000)
  },
  {
    account_executive: '5678',
    daily_turnover: getRandomInt(5000, 5000000),
    accumulated_turnover: getRandomInt(5000, 5000000),
  }
];

export const CASH: Cash[] = [
  {
    cash: getRandomInt(5000, 5000000)
  }
];

export const LOANS: Loan[] = [
  {
    term: getRandomInt(5000, 5000000),
    mortgage_house: getRandomInt(5000, 5000000),
    mortgage_marketing: getRandomInt(5000, 5000000),
    personal: getRandomInt(5000, 5000000),
    margin: getRandomInt(5000, 5000000),
    advanced: getRandomInt(5000, 5000000)
  }
];

export const BANK_FACILITIES: BankFacility[] = [
  {
    utilized: getRandomInt(5000, 5000000),
    unutilized: getRandomInt(5000, 5000000)
  }
];
