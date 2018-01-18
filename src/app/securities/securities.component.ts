import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { Security, Securities } from './security';
import { DataTableResource } from 'angular-4-data-table';
import { getSecurities } from '../mock-data';
import { Http, Response } from '@angular/http';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
@Component({
  selector: 'app-securities',
  templateUrl: './securities.component.html',
  styleUrls: ['./securities.component.css']
})
export class SecuritiesComponent implements OnInit {
  securities: Security[];
  currentTime;
  itemResource;
  items = [];
  itemCount = 0;
  apiUrl;

  /*
    constructor(private dataService: DataService) { }

    ngOnInit() {
      this.loadComponent();
      setInterval(() => {
        this.loadComponent();
      }, 1000);
    }

    loadComponent() {
      this.currentTime = new Date();
      this.dataService.getSecurity()
      .subscribe(securities => this.securities = securities);
    }
    */

  ngOnInit() {

  }

  constructor(private http: Http, private dataService: DataService) {
    this.apiUrl = environment.apiUrl;
  }

  reloadItems(params) {
    this.dataService.getSecurity(params).then(
      result => {
        this.items = result.items;
        this.itemCount = result.itemCount;
      }
    );
  }

  rowClick(rowEvent) {
    console.log('Clicked: ' + rowEvent.row.item.name);
  }

  rowDoubleClick(rowEvent) {
    alert('Double clicked: ' + rowEvent.row.item.name);
  }

  rowTooltip(item) { return item.account_executive; }
}
