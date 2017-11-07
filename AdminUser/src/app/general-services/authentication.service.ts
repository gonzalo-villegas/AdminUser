import { Injectable } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Injectable()
export class AuthenticationService {
  urlString = 'http://localhost:8081/WebSecurityEnhanced/validation/uservalid';
  constructor(private http: Http) { }

  login(username: string, password: string) {
    return this.http.post(this.urlString, JSON.stringify({ username: username, password: password }))
            .map((response: Response) => {
                const user = response.json();
                if (user && user.token) {
                    localStorage.setItem('currentUser', JSON.stringify(user));
                }
                return user;
            });
    }

    logout() {
        localStorage.removeItem('currentUser');
    }
}
