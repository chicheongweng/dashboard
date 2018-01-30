import { Component, OnInit, Input, OnChanges, SimpleChange } from '@angular/core';

// reference
// 1. https://www.themarketingtechnologist.co/building-nested-components-in-angular-2/
// 2. https://medium.com/@christophkrautz/testing-ngonchanges-in-angular-components-bbb3b4650ee8

@Component({
  selector: 'app-amount',
  templateUrl: './amount.component.html',
  styleUrls: ['./amount.component.css']
})
export class AmountComponent implements OnChanges {
  @Input() amount: number;
  style;
  changeLog: string[] = [];

  constructor() { }

  private setBackGround(color: string) {
    this.style = {
      'background-color': color
    };
  }

  private setYellow() {
    this.setBackGround('yellow');
  }

  private setWhite() {
    this.setBackGround('white');
  }

  flash() {
    let count = 0;
    this.setYellow();
    count++;
    const myVar = setInterval(() => { this.setWhite();
                                      if (count > 0) {
                                        count = 0;
                                        clearInterval(myVar);
                                      }
                                    }, 1000);
  }
  /*
  ngOnChanges() {
    console.log('ngOnChanges');
    this.flash();
  }
  */
  ngOnChanges(changes: {[propKey: string]: SimpleChange}) {
    const log: string[] = [];
    // tslint:disable-next-line:forin
    for (let propName in changes) {
      let changedProp = changes[propName];
      let to = JSON.stringify(changedProp.currentValue);
      if (changedProp.isFirstChange()) {
        log.push(`Initial value of ${propName} set to ${to}`);
      } else {
        let from = JSON.stringify(changedProp.previousValue);
        log.push(`${propName} changed from ${from} to ${to}`);
        this.flash();
      }
    }
    this.changeLog.push(log.join(', '));
    // console.log(log);
  }
}
