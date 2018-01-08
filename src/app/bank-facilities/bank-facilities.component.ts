import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { BankFacility } from './bank-facility';
@Component({
  selector: 'app-bank-facilities',
  templateUrl: './bank-facilities.component.html',
  styleUrls: ['./bank-facilities.component.css']
})
export class BankFacilitiesComponent implements OnInit {
  title = 'Bank Facilities';
  constructor() { }

  ngOnInit() {
  }

}
