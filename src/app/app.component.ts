import { Component, OnInit } from '@angular/core';
import { AuthService } from './auth/auth.service';
import { environment } from '../environments/environment';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'ECG Dashboard (' + environment.name + ')';

  constructor(public auth: AuthService) {
    auth.handleAuthentication();
  }

  ngOnInit() {

  }
}
