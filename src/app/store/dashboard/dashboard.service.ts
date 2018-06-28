import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

@Injectable({
  providedIn: 'root'
})
export class DashboardService {

  constructor(private http: HttpClient) {
  }

  loadDashboardData(): Observable<any[]> {
    const url = 'http://localhost:50000/api/Account/Dashboard';
    return this.http.get<any[]>(url);
  }

}
