import { Component, OnInit } from '@angular/core';
import { AppState } from '../../store';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Friend } from '../../store/friends/models/friend';
import { LoadDashboardDataAction } from '../../store/dashboard/actions/dashboard.actions';
import { getDashboardDataDataState } from '../../store/dashboard/selectors/dashboard.selectors';
import { DashboardData } from '../../store/dashboard/models/dashboard-data';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

  dashboardData$: Observable<DashboardData>;

  constructor(private store: Store<AppState>) {
  }

  ngOnInit() {
    this.store.dispatch(new LoadDashboardDataAction());

    this.dashboardData$ = this.store.select(getDashboardDataDataState);
    // this.dashboardData$.subscribe(res => console.log('dashboardData', res));
  }

}
