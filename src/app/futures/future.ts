export class Future {
  account_executive: string;
  daily_turnover: number;
  accumulated_turnover: number;
}

export class Futures {
  private futures: Future[];

  constructor(futures: Future[]) {
    this.futures = futures;
  }

  public getDaily(): number {
    let total = 0;
    // tslint:disable-next-line:prefer-const
    for (let entry of this.futures) {
      total += entry.daily_turnover;
    }
    return total;
  }

  public getAccumulated(): number {
    let total = 0;
    // tslint:disable-next-line:prefer-const
    for (let entry of this.futures) {
      total += entry.accumulated_turnover;
    }
    return total;
  }
}
