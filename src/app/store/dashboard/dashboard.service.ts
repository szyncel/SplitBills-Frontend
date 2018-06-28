import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { DashboardData } from './models/dashboard-data';

@Injectable({
  providedIn: 'root'
})
export class DashboardService {

  constructor(private http: HttpClient) {
  }

  loadDashboardData(): Observable<DashboardData> {
    const url = 'http://localhost:50000/api/Account/Dashboard';
    return this.http.get<DashboardData>(url);
  }

}
