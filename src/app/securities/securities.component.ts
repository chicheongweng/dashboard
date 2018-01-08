import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { Security } from './security';
@Component({
  selector: 'app-securities',
  templateUrl: './securities.component.html',
  styleUrls: ['./securities.component.css']
})
export class SecuritiesComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
