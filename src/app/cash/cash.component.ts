import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { Cash } from './cash';
@Component({
  selector: 'app-cash',
  templateUrl: './cash.component.html',
  styleUrls: ['./cash.component.css']
})
export class CashComponent implements OnInit {
  title = 'Cash';
  constructor() { }

  ngOnInit() {
  }

}
