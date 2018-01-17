import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { Security, Securities } from './security';
import { DataTableResource } from 'angular-4-data-table';
import { getSecurities } from '../mock-data';
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
  dataService;

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

  constructor() {
    this.itemResource = new DataTableResource(getSecurities());
    this.itemResource.count().then(count => this.itemCount = count);
  }

  reloadItems(params) {
    this.currentTime = new Date();
    this.itemResource.query(params).then(items => this.items = items);
  }

  rowClick(rowEvent) {
      console.log('Clicked: ' + rowEvent.row.item.name);
  }

  rowDoubleClick(rowEvent) {
      alert('Double clicked: ' + rowEvent.row.item.name);
  }

  rowTooltip(item) { return item.account_executive; }
}
