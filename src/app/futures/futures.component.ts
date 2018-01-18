import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { Future, Futures } from './future';
import { Http, Response } from '@angular/http';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
@Component({
  selector: 'app-futures',
  templateUrl: './futures.component.html',
  styleUrls: ['./futures.component.css']
})
export class FuturesComponent implements OnInit {
  futures: Future[];
  currentTime;
  itemResource;
  items = [];
  itemCount = 0;
  apiUrl;

  ngOnInit() {

  }

  constructor(private http: Http, private dataService: DataService) {
    this.apiUrl = environment.apiUrl;
  }

  reloadItems(params) {
    this.dataService.getFuture(params).then(
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
