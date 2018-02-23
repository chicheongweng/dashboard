import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { Loan } from './loan';

@Component({
  selector: 'app-loans',
  templateUrl: './loans.component.html',
  styleUrls: ['./loans.component.css']
})
export class LoansComponent implements OnInit {
  loans: Loan[];
  currentTime;

  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.loadComponent();
  }

  loadComponent() {
    this.currentTime = new Date();
    this.dataService.getLoan()
    .subscribe(loans => this.loans = loans);
  }
}
