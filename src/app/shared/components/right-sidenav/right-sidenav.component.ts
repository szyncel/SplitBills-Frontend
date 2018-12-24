import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from '../../../store';
import { getExpenseSummary } from '../../../store/friends/selectors/get-common-expenses.selectors';
import { Observable } from 'rxjs';
import { getSelectedFriendData, getSelectedFriendState } from '../../../store/friends/selectors/friends.selectors';
import * as _ from 'lodash';
import { Friend } from '../../../store/friends/models/friend';

@Component({
  selector: 'app-right-sidenav',
  templateUrl: './right-sidenav.component.html',
  styleUrls: ['./right-sidenav.component.scss']
})
export class RightSidenavComponent implements OnInit {

  expensesSummary$; // if - 'text-danger' else 'text-success'

  selectedFriendData$: Observable<Friend>;

  constructor(private store: Store<AppState>) {
  }

  ngOnInit() {
    this.expensesSummary$ = this.store.select(getExpenseSummary);
    // this.expensesSummary$.subscribe(res => console.log('total:', res));

    this.selectedFriendData$ = this.store.select(getSelectedFriendData);
    // this.selectedFriendData$.subscribe(res => console.log('Data', res));
  }

  setClass(val: number): string {
    return val < 0 ? 'text-danger' : 'text-success';
  }

  isNegative(val: number): boolean {
    return val < 0 ? true : false;
  }

  formatValue(val: number): number {
    return Math.abs(val);
  }

}
