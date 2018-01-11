import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { Security, Securities } from './security';
@Component({
  selector: 'app-securities',
  templateUrl: './securities.component.html',
  styleUrls: ['./securities.component.css']
})
export class SecuritiesComponent implements OnInit {
  securities: Security[];
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
    this.dataService.getSecurity()
    .subscribe(securities => this.securities = securities);
  }

}
