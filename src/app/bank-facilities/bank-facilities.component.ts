import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { BankFacility } from './bank-facility';
import { AuthService } from '../auth/auth.service';

@Component({
  selector: 'app-bank-facilities',
  templateUrl: './bank-facilities.component.html',
  styleUrls: ['./bank-facilities.component.css']
})
export class BankFacilitiesComponent implements OnInit {
  title = 'Bank Facilities';
  bank_facilities: BankFacility[];

  constructor(private dataServie: DataService, public auth: AuthService) { }

  ngOnInit() {
    this.dataServie.getBankFacility()
    .subscribe(bank_facilities => this.bank_facilities = bank_facilities); }
}
