import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { Cash } from './cash';
import { AuthService } from '../auth/auth.service';

@Component({
  selector: 'app-cash',
  templateUrl: './cash.component.html',
  styleUrls: ['./cash.component.css']
})
export class CashComponent implements OnInit {
  title = 'Cash';
  cash: Cash[];
  constructor(private dataService: DataService, public auth: AuthService) { }

  ngOnInit() {
    this.dataService.getCash()
    .subscribe(cash => this.cash = cash);
  }
}
