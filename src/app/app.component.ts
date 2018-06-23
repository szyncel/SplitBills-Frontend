import { Component } from '@angular/core';
import { TokenService } from './store/auth/token.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {


  constructor(public tokenService: TokenService) {
  }
}
