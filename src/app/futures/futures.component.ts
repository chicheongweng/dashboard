import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { Future, Futures } from './future';
@Component({
  selector: 'app-futures',
  templateUrl: './futures.component.html',
  styleUrls: ['./futures.component.css']
})
export class FuturesComponent implements OnInit {
  futures: Futures;
  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.dataService.getFuture()
    .subscribe(futures => this.futures = new Futures(futures));
  }

}
