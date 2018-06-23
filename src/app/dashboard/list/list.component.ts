import { Component, OnInit } from '@angular/core';
import { AppState } from '../../store';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';
import { Friend } from '../../store/friends/models/friend';
import { LoadAllFriendsAction } from '../../store/friends/actions/friends.actions';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

  friends: Observable<Friend[]>;

  constructor(private store: Store<AppState>) {
  }

  ngOnInit() {
  }

}
