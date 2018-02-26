import { Component, OnInit } from '@angular/core';
import {AdalService} from 'ng2-adal/dist/services/adal.service';
import {SecretService} from './auth/secret.service';
import { environment } from '../environments/environment';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'ECG Dashboard (' + environment.name + ')';

  ngOnInit(): void {
    this.adalService.handleWindowCallback();
    this.adalService.getUser();
  }

  constructor(
    private adalService: AdalService,
    private secretService: SecretService,
  ) {
    this.adalService.init(this.secretService.adalConfig);
  }

  getUserName(): string {
    const userInfo = this.adalService.userInfo;
    if (this.adalService.userInfo.isAuthenticated) {
      return this.adalService.userInfo.userName;
    } else {
      return null;
    }
  }

  isAuthenticated(): boolean {
    return this.adalService.userInfo.isAuthenticated;
  }

  login() {
    this.adalService.login();
  }

  logout() {
    this.adalService.logOut();
  }
}
