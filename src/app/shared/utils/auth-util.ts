import * as _ from 'lodash';
import { JwtHelperService } from '@auth0/angular-jwt';

export class AuthUtil {

  /**
   * Otrzymuje i zwraca access token z sessionStorage
   * @getter
   */
  static get accessToken(): string {
    return sessionStorage.getItem('access_token');
  }

  /**
   * Ustawia access token do sessionStorage
   * @setter
   */
  static set accessToken(value: string) {
    if (_.isNil(value)) {
      sessionStorage.removeItem('access_token');
    } else {
      sessionStorage.setItem('access_token', value);
    }
  }

  static isExpired(): boolean {
    const helper = new JwtHelperService();
    return helper.isTokenExpired(AuthUtil.accessToken);
  }

  static isTokenExist(): string {
    return sessionStorage.getItem('access_token');
  }

  static getTokenData() {
    const helper = new JwtHelperService();
    return helper.decodeToken(AuthUtil.accessToken);
  }
}
