import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { Friend } from './models/friend';

@Injectable({
  providedIn: 'root'
})
export class FriendsService {

  constructor(private http: HttpClient) {
  }

  loadAllFriends(): Observable<Friend[]> {
    console.log('here?');
    const url = 'http://localhost:50000/api/Account/Friends';
    return this.http.get<Friend[]>(url);
  }

}
