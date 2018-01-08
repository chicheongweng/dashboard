import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { Future } from '../futures/future';
import { Cash } from '../cash/cash';
import { Loan } from '../loans/loan';
import { Security } from '../securities/security';
import { BankFacility } from '../bank-facilities/bank-facility';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  title = 'Dashboard';
  constructor(private dataService: DataService) { }

  security: Security;
  future: Future;
  loan: Loan;
  cash: Cash;
  bank_facility: BankFacility;

  ngOnInit() {
  }

}
