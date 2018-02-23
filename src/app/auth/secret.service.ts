import {Injectable} from '@angular/core';
import { environment } from '../../environments/environment';

// Application specific configuration
@Injectable()
export class SecretService {
  public get adalConfig(): any {
    return {
      tenant: `${environment.auth_config.tenant}`,
      clientId: `${environment.auth_config.clientId}`,
      redirectUri: window.location.origin + '/',
      postLogoutRedirectUri: window.location.origin + '/'
    };
  }
}
