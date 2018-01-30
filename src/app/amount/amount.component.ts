import { Component, OnInit, Input, OnChanges } from '@angular/core';

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

  ngOnChanges() {
    this.flash();
  }
}
