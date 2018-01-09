export class Security {
  account_executive: string;
  daily_turnover: number;
  accumulated_turnover: number;
}

export class Securities {
  securities: Security[];

  constructor(securities: Security[]) {
    this.securities = securities;
  }

  public getDaily(): number {
    let total = 0;
    // tslint:disable-next-line:prefer-const
    for (let entry of this.securities) {
      total += entry.daily_turnover;
    }
    return total;
  }

  public getAccumulated(): number {
    let total = 0;
    // tslint:disable-next-line:prefer-const
    for (let entry of this.securities) {
      total += entry.accumulated_turnover;
    }
    return total;
  }
}
