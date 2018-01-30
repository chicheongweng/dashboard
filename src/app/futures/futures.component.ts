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

  constructor(private dataService: DataService) {
    this.apiUrl = environment.apiUrl;
    this.params = environment.params;
  }

  ngOnInit() {
    this.dataService.getFuture(this.params).subscribe(
      resp => {
        this.currentTime = new Date();
        this.items = resp.body;
        this.itemCount = Number(resp.headers.get('X-Total-Count'));
      }
    );
    setInterval(() => {
      this.reloadItems(this.params);
    }, environment.poll_freq);
  }

  private copy(from, to) {
    to.account_executive = from.account_executive;
    to.daily_turnover = from.daily_turnover;
    to.accumulated_turnover = from.accumulated_turnover;
  }

  reloadItems(params) {
    this.dataService.getFuture(params).subscribe(
      resp => {
        this.params = params;
        this.currentTime = new Date();
        // this.items = resp.body;
        for (let _i = 0; _i < resp.body.length; _i++) {
          this.copy(resp.body[_i], this.items[_i]);
        }
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
