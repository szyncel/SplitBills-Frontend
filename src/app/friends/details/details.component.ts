import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { AppState } from '../../store';
import { Store } from '@ngrx/store';
import * as _ from 'lodash';
import { SelectFriendAction } from '../../store/friends/actions/friends.actions';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit {

  constructor(private store: Store<AppState>,
              private route: ActivatedRoute,
              private router: Router) {
  }

  ngOnInit() {

    this.route.params
      .map((params: Params) => +_.get(params, 'id', null))
      .filter((id: number) => !!id)
      .subscribe((id: number) => {
        this.store.dispatch(new SelectFriendAction({ id }));
      });
  }

}
