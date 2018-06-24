import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from '../../../store';
import { getExpenseSummary } from '../../../store/friends/selectors/get-common-expenses.selectors';

@Component({
  selector: 'app-right-sidenav',
  templateUrl: './right-sidenav.component.html',
  styleUrls: ['./right-sidenav.component.scss']
})
export class RightSidenavComponent implements OnInit {

  expensesSummary$;

  constructor(private store: Store<AppState>) {
  }

  ngOnInit() {
    this.expensesSummary$ = this.store.select(getExpenseSummary);
    this.expensesSummary$.subscribe(res => console.log('total:', res));
  }

}
