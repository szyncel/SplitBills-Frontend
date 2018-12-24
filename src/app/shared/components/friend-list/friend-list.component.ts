import { Component, OnInit } from '@angular/core';
import { AppState } from '../../../store';
import { Store } from '@ngrx/store';
import { Friend } from '../../../store/friends/models/friend';
import { Observable } from 'rxjs';
import { LoadAllFriendsAction } from '../../../store/friends/actions/friends.actions';
import { getAllFriendsDataState, getSelectedFriendState } from '../../../store/friends/selectors/friends.selectors';
import { Router } from '@angular/router';

@Component({
  selector: 'app-friend-list',
  templateUrl: './friend-list.component.html',
  styleUrls: ['./friend-list.component.scss']
})
export class FriendListComponent implements OnInit {

  friendList$: Observable<Friend[]>;

  selectedFriendId$;


  constructor(private store: Store<AppState>,
              private router: Router) {
  }

  ngOnInit() {
    this.selectedFriendId$ = this.store.select(getSelectedFriendState);
    //this.selectedFriendId$.subscribe(res => console.log('selected', res));

    this.friendList$ = this.store.select(getAllFriendsDataState);
   // this.friendList$.subscribe(res => console.log('friends', res));
    this.store.dispatch(new LoadAllFriendsAction());
  }

  onShowDetails(friend: Friend): void {
    // this.store.dispatch(new SelectFriendAction({ id: friend.Id }));
    this.router.navigate(['/friends', friend.Id]);
    //console.log(friend);
  }

  checkSelected(friend: Friend): Observable<boolean> {
    return this.selectedFriendId$
      .map((id: number) => id === friend.Id);
  }

}
