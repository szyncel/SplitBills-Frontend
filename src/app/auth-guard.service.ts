import { Injectable } from '@angular/core';
import { CanActivate, Router, RouterStateSnapshot } from '@angular/router';
import { AppState } from './store';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { getIsLoggedIn } from './store/auth/selectors/auth.selectors';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements CanActivate {

  constructor(
    private router: Router,
    private store: Store<AppState>
  ) {
  }

  canActivate(route, state: RouterStateSnapshot): Observable<boolean> {
    return this.store.select(getIsLoggedIn);
    // if () {
    //   return true;
    // }
    // this.router.navigate(['/login'], {queryParams: {returnUrl: state.url}});
    // return false;
  }

}
