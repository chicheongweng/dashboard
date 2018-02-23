import {Component, Injectable} from '@angular/core';
import {AdalService} from 'ng2-adal/dist/core';
import {Observable} from 'rxjs/Observable';

@Injectable()
export class AuthService {

    constructor(private adalService: AdalService) {}

    public getToken(): Observable<string> {
        return this.adalService.acquireToken('https://emperorgrouphk.onmicrosoft.com/').map(
            token => token.toString()
        );
    }

}
