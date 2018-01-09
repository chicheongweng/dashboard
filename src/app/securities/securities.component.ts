import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { Security, Securities } from './security';
@Component({
  selector: 'app-securities',
  templateUrl: './securities.component.html',
  styleUrls: ['./securities.component.css']
})
export class SecuritiesComponent implements OnInit {
  securities: Securities;
  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.dataService.getSecurity()
    .subscribe(securities => this.securities = new Securities(securities));
  }

}
