import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { environment } from '../../environments/environment';
@Component({
  selector: 'app-futures',
  templateUrl: './futures.component.html',
  styleUrls: ['./futures.component.css']
})
export class FuturesComponent implements OnInit {
  currentTime;
  items = [];
  itemCount = 0;
  apiUrl;
  params;

  ngOnInit() {
    setInterval(() => {
      this.currentTime = new Date();
      this.reloadItems(this.params);
    }, 2000);
  }

  constructor(private dataService: DataService) {
    this.apiUrl = environment.apiUrl;
    this.params = environment.params;
  }

  reloadItems(params) {
    this.dataService.getFuture(params).subscribe(
      resp => {
        this.params = params;
        this.currentTime = new Date();
        this.items = resp.body;
        this.itemCount = Number(resp.headers.get('X-Total-Count'));
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
