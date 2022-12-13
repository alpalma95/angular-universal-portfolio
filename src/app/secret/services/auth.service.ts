import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
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
}
