import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import * as auth0 from 'auth0-js';
import { environment } from '../../environments/environment';

@Injectable()
export class AuthService {

  auth0 = new auth0.WebAuth({
    clientID: environment.auth_config.clientID,
    domain: environment.auth_config.domain,
    responseType: 'token id_token',
    audience: `https://${environment.auth_config.domain}/userinfo`,
    redirectUri: environment.auth_config.callbackURL,
    scope: 'openid profile'

  });

  auth_enabled: boolean;
  userProfile: any;

  constructor(public router: Router) {
    this.auth_enabled = environment.auth_enabled;
  }

  public isAuthEnabled(): boolean {
    return this.auth_enabled;
  }

  public login(): void {
    this.auth0.authorize();
  }

  // reference: https://auth0.com/docs/quickstart/spa/angular2/02-user-profile
  public getProfile(cb): void {
    const accessToken = localStorage.getItem('access_token');
    if (!accessToken) {
      throw new Error('Access token must exist to fetch profile');
    }

    const self = this;
    this.auth0.client.userInfo(accessToken, (err, profile) => {
      if (profile) {
        self.userProfile = profile;
      }
      cb(err, profile);
    });
  }


  public handleAuthentication(): void {
    this.auth0.parseHash((err, authResult) => {
      if (authResult && authResult.accessToken && authResult.idToken) {
        this.setSession(authResult);
        this.router.navigate(['/dashboard']);
      } else if (err) {
        this.router.navigate(['/dashboard']);
        console.log(err);
        alert(`Error: ${err.error}. Check the console for further details.`);
      }
    });
  }

  private setSession(authResult): void {
    // Set the time that the access token will expire at
    const expiresAt = JSON.stringify((authResult.expiresIn * 1000) + new Date().getTime());
    localStorage.setItem('access_token', authResult.accessToken);
    localStorage.setItem('id_token', authResult.idToken);
    localStorage.setItem('expires_at', expiresAt);
    console.log('access token', authResult.accessToken);
    console.log('id token', authResult.idToken);
    console.log('expires_at', expiresAt);
  }

  public logout(): void {
    // Remove tokens and expiry time from localStorage
    localStorage.removeItem('access_token');
    localStorage.removeItem('id_token');
    localStorage.removeItem('expires_at');
    // Go back to the home route
    this.router.navigate(['/']);
  }

  public getGetTime() {
    return new Date().getTime();
  }

  public getExpiresAt() {
    return JSON.parse(localStorage.getItem('expiers_at'));
  }

  public isAuthenticated(): boolean {
    if (! this.isAuthEnabled()) {
      return true;
    }
    // Check whether the current time is past the
    // access token's expiry time
    const expiresAt = JSON.parse(localStorage.getItem('expires_at'));
    return new Date().getTime() < expiresAt;
  }

}
