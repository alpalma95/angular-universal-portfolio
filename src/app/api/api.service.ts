import { Injectable, OnInit } from '@angular/core';

import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  data = this.http.get('http://localhost:4200/api/users');
  constructor(private http: HttpClient) {}
}
