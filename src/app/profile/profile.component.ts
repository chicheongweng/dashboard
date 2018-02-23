import { Component, OnInit } from '@angular/core';
import { AuthService } from './../auth/auth.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  public profile: any;

  constructor(public auth: AuthService) { }

  ngOnInit() {
    /*
    if (this.auth.userProfile) {
      this.profile = this.auth.userProfile;
      console.log('profile 1', this.profile);
    } else {
      this.auth.getProfile((err, profile) => {
        this.profile = profile;
        console.log('profile 2', this.profile);
      });
    }
    */
  }
}
