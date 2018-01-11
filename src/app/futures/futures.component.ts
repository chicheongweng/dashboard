import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { Future, Futures } from './future';
@Component({
  selector: 'app-futures',
  templateUrl: './futures.component.html',
  styleUrls: ['./futures.component.css']
})
export class FuturesComponent implements OnInit {
  futures: Future[];
  currentTime;
  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.loadComponent();
    setInterval(() => {
      this.loadComponent();
    }, 1000);
  }

  loadComponent() {
    this.currentTime = new Date();
    this.dataService.getFuture()
    .subscribe(futures => this.futures = futures);
  }

}
