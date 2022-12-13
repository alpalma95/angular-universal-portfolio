import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Subject, BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private _activeUser: BehaviorSubject<any> = new BehaviorSubject<any>({});
  private _userIsLoggedIn: BehaviorSubject<boolean> =
    new BehaviorSubject<boolean>(false);

  public activeUser$ = this._activeUser.asObservable();
  public userIsLoggedIn$ = this._userIsLoggedIn.asObservable();

  constructor(private http: HttpClient) {}

  signup(user: any) {
    return this.http.post(`${environment.base_url}/api/users/signup`, user);
  }

  login(emailAndPassword: any) {
    return this.http.post(
      `${environment.base_url}/api/users/login`,
      emailAndPassword
    );
  }

  setActiveUser(user: any): void {
    this._activeUser.next(user);

    this._userIsLoggedIn.next(true);
  }
}
