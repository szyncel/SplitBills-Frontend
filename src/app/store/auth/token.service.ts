import { Injectable } from '@angular/core';
import { AuthUtil } from '../../shared/utils/auth-util';
import { JwtHelperService } from '@auth0/angular-jwt';

@Injectable({
  providedIn: 'root'
})
export class TokenService {

  constructor() {
  }

  isLoggedIn(): boolean {
    const helper = new JwtHelperService();
    return helper.isTokenExpired(AuthUtil.accessToken);
  }
}
