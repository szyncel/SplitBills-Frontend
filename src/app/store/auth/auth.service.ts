import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Auth } from './models/auth';
import { Observable } from 'rxjs/internal/Observable';
import { SuccessAddResponse } from '../common/models/success-add-response';
import 'rxjs/add/operator/map';
import { User } from './models/user';
import { LoginSuccessResponse } from './models/login-success-response';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) {
  }

  /** */
  signup(model: User): Observable<SuccessAddResponse> {
    const url = 'http://localhost:50000/api/Account/Register';
    return this.http.post<SuccessAddResponse>(url, model);
  }

  /** */
  signin(model: Auth): Observable<LoginSuccessResponse> {
    const url = 'http://localhost:50000/api/Account/Login';
    return this.http.post<LoginSuccessResponse>(url, model);
  }
}
