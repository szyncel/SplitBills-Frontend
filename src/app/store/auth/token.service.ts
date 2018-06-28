import { Injectable } from '@angular/core';
import { AuthUtil } from '../../shared/utils/auth-util';
import { JwtHelperService } from '@auth0/angular-jwt';

@Injectable({
  providedIn: 'root'
})
export class TokenService {

  constructor() {
  }

  /** @deprecated dont use this */
  isLoggedIn(): boolean {
    const helper = new JwtHelperService();
    return helper.isTokenExpired(AuthUtil.accessToken);
  }

  /** @deprecated dont use this */
  get currentUser() {
    const token = sessionStorage.getItem('access_token');
    if (!token) return null;
    const jwtHelper = new JwtHelperService();
    return jwtHelper.decodeToken(token);
  }
}
