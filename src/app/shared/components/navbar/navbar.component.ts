import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { RegisterDialogComponent } from '../../../auth/register-dialog/register-dialog.component';
import { LoginDialogComponent } from '../login-dialog/login-dialog.component';
import { AppState } from '../../../store';
import { Store } from '@ngrx/store';
import { LogoutUserAction } from '../../../store/auth/actions/auth.actions';
import { TokenService } from '../../../store/auth/token.service';
import { AuthUtil } from '../../utils/auth-util';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  isLoggedIn;

  userInfo;

  constructor(private dialog: MatDialog,
              private store: Store<AppState>,
              public tokenService: TokenService
  ) {
  }

  ngOnInit() {
    this.userInfo = this.tokenService.currentUser;
    this.isLoggedIn = this.tokenService.isLoggedIn();
  }

  openRegisterDialog() {
    let dialogRef = this.dialog.open(RegisterDialogComponent, {
      width: '400px'
    });
    dialogRef.afterClosed().subscribe(() => {
      dialogRef = null;
    });
  }

  openLoginDialog() {
    let dialogRef = this.dialog.open(LoginDialogComponent, {
      width: '400px'
    });
    dialogRef.afterClosed().subscribe(() => {
      dialogRef = null;
    });
  }

  logout() {
    this.store.dispatch(new LogoutUserAction());

  }

}
