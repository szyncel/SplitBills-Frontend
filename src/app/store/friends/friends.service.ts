import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Friend } from './models/friend';
import { CommonExpenseResponse } from './models/common-expense-response';

@Injectable({
  providedIn: 'root'
})
export class FriendsService {

  constructor(private http: HttpClient) {
  }

  loadAllFriends(): Observable<Friend[]> {
    const url = 'http://localhost:50000/api/Account/Friends';
    return this.http.get<Friend[]>(url);
  }

  loadCommonExpenses(id: number): Observable<CommonExpenseResponse> {
    const url = `http://localhost:50000/api/Account/CommonExpenses/${id}`;
    return this.http.get<CommonExpenseResponse>(url);
  }

}
