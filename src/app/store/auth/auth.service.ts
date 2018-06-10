import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Auth } from './models/auth';
import { Observable } from 'rxjs/internal/Observable';
import { SuccessAddResponse } from '../common/models/success-add-response';
import 'rxjs/add/operator/map';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) {
  }

  /** */
  signup(model: Auth): Observable<SuccessAddResponse> {
    console.log('service:', model);
    const url = 'http://192.168.0.81:59987/api/Account/Register';
    return this.http.post<SuccessAddResponse>(url, model);
  }
}
