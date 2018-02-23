import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-welcome',
  template: '<h1>Welcome to ECG Dashboard, please login!</h1>'
})
export class WelcomeComponent implements OnInit {

  constructor() {
    console.log('Entering welcome');
  }

  public ngOnInit() {
    console.log('ngOnInit is called');
  }
}
