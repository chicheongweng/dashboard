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
  cssClass;

  constructor() { }

  getCSSClass() {
    this.cssClass = {
      'background-color': 'white',
      '-webkit-animation-name': 'example', /* Safari 4.0 - 8.0 */
      '-webkit-animation-duration': '1s', /* Safari 4.0 - 8.0 */
      'animation-name': 'example',
      'animation-duration': '1s'
    };
  }

  ngOnChanges() {
    console.log('changes detected');
    this.getCSSClass();
  }
}
