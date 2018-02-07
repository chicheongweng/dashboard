import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { Loan } from './loan';
import { AuthService } from '../auth/auth.service';

@Component({
  selector: 'app-loans',
  templateUrl: './loans.component.html',
  styleUrls: ['./loans.component.css']
})
export class LoansComponent implements OnInit {
  loans: Loan[];
  currentTime;

  constructor(private dataService: DataService, public auth: AuthService) { }

  ngOnInit() {
    this.loadComponent();
  }

  loadComponent() {
    this.currentTime = new Date();
    this.dataService.getLoan()
    .subscribe(loans => this.loans = loans);
  }
}
