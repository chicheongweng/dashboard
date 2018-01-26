import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { Security } from './security';
import { environment } from '../../environments/environment';
@Component({
  selector: 'app-securities',
  templateUrl: './securities.component.html',
  styleUrls: ['./securities.component.css']
})
export class SecuritiesComponent implements OnInit {
  securities: Security[];
  currentTime;
  items = [];
  itemCount = 0;
  apiUrl;
  params;

  ngOnInit() {
    setInterval(() => {
      this.reloadItems(this.params);
    }, 2000);
  }

  constructor(private dataService: DataService) {
    this.apiUrl = environment.apiUrl;
    this.params = environment.params;
  }

  reloadItems(params) {
    this.dataService.getSecurity(params).subscribe(
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
