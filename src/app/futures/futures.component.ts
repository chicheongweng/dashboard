import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { Future } from './future';
@Component({
  selector: 'app-futures',
  templateUrl: './futures.component.html',
  styleUrls: ['./futures.component.css']
})
export class FuturesComponent implements OnInit {
  futures: Future[];
  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.dataService.getFuture()
    .subscribe(futures => this.futures = futures);
  }

}
