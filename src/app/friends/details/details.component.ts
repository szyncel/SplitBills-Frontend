import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { AppState } from '../../store';
import { Store } from '@ngrx/store';
import * as _ from 'lodash';
import {
  LoadCommonExpensesAction,
  LoadCommonExpensesClearAction,
  SelectFriendAction
} from '../../store/friends/actions/friends.actions';
import { getSelectedFriendData } from '../../store/friends/selectors/friends.selectors';
import { Observable } from 'rxjs';
import { CommonExpense } from '../../store/friends/models/common-expense';
import {
  getCommonExpensesList,
  getCommonExpensesLoading,
  getExpenseSummary
} from '../../store/friends/selectors/get-common-expenses.selectors';
import * as moment from 'moment';
import { filter, map } from 'rxjs/operators';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit, OnDestroy {

  selectedFriendData$;
  commonExpenses$: Observable<CommonExpense[]>;
  expensesSummary$: Observable<number>;
  loading$: Observable<boolean>;

  constructor(private store: Store<AppState>,
              private route: ActivatedRoute,
              private router: Router) {
  }

  ngOnInit() {
    this.selectedFriendData$ = this.store.select(getSelectedFriendData);

    this.loading$ = this.store.select(getCommonExpensesLoading);
    this.loading$.subscribe(res => console.log('loading', res));

    this.commonExpenses$ = this.store.select(getCommonExpensesList);
    this.commonExpenses$.subscribe(res => console.log('total', res));
    this.expensesSummary$ = this.store.select(getExpenseSummary);
    // this.commonExpenses$.subscribe((res: CommonExpense[]) => {
    //   _.each(res, (item: any) => {
    //     const montName = moment(item.Date).locale('pl').format('Do');
    //     const numberDay= moment(item.Date).locale('pl').format('MMMM');
    //     console.log('montName', montName);
    //     console.log('numberDay', numberDay);
    //   });
    // });

    this.route.params.pipe(
      map((params: Params) => +_.get(params, 'id', null)),
      filter((id: number) => !!id)
    ).subscribe((id: number) => {
      this.store.dispatch(new SelectFriendAction({ id }));
      this.store.dispatch(new LoadCommonExpensesAction({ id }));
    });
  }

  ngOnDestroy() {
    this.store.dispatch(new LoadCommonExpensesClearAction());
    this.store.dispatch(new SelectFriendAction({ id: null }));
  }

}
