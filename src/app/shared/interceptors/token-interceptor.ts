import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs';
import { TokenService } from '../../store/auth/token.service';
import { MatSnackBar } from '@angular/material';
import { AuthUtil } from '../utils/auth-util';
import { Injectable } from '@angular/core';

@Injectable()
export class TokenInterceptor implements HttpInterceptor {

  constructor(public auth: TokenService, private snackBar: MatSnackBar) {
  }

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

    request = this.getRequestWithAuthorizationHeader(request);

    return next.handle(request);
  }

  private getRequestWithAuthorizationHeader(request) {
    const accessToken = AuthUtil.accessToken;
    return !accessToken ? request : request.clone({
      setHeaders: {
        Authorization: `Bearer ${accessToken}`
      }
    });
  }
}
