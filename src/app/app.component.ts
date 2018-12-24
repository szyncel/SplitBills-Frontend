import { Component } from '@angular/core';
import { TokenService } from './store/auth/token.service';
import { AppState } from './store';
import { Store } from '@ngrx/store';
import { getIsLoggedIn } from './store/auth/selectors/auth.selectors';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  constructor(public tokenService: TokenService,
              public store: Store<AppState>) {
    this.store.select(getIsLoggedIn).subscribe(res => console.log('słuchanie', res));

    // if (this.tokenService.isLoggedIn()) {
    //   console.log('klik');
    // } else {
    //   console.log('nieklik');
    // }
  }
}
