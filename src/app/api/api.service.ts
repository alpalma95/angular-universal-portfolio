import { Injectable, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';

import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  data = this.http.get(`${environment.base_url}/api/users`);
  constructor(private http: HttpClient) {}
}
