import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Observable } from 'rxjs/Observable';
import { MatDialogRef, MatSnackBar } from '@angular/material';
import { Store } from '@ngrx/store';
import { AppState } from '../../store';
import { User } from '../../store/auth/models/user';
import { RegisterUserAction, RegisterUserClearAction } from '../../store/auth/actions/auth.actions';
import { getAuthLogin } from '../../store/auth/selectors/auth.selectors';
import { AuthUtil } from '../../shared/utils/auth-util';

@Component({
  selector: 'app-register-dialog',
  templateUrl: './register-dialog.component.html',
  styleUrls: ['./register-dialog.component.scss']
})
export class RegisterDialogComponent implements OnInit, OnDestroy {

  form: FormGroup;

  loading$: Observable<any>;

  success$: Observable<boolean>;

  loggedIn;

  constructor(private fb: FormBuilder,
              private dialogRef: MatDialogRef<RegisterDialogComponent>,
              private store: Store<AppState>) {
  }

  ngOnInit() {
    this.loggedIn = AuthUtil.accessToken;
    console.log(this.loggedIn);
    this.createForm();

    this.loading$ = this.store.select(getAuthLogin);
    this.loading$.subscribe(res => console.log('res', res));
    // this.success$=this.store.select()

  }

  onSubmit() {
    const form = this.form.value;
    const model = {
      UserName: form.UserName,
      Email: form.Email,
      Password: form.Password
    } as User;
    this.store.dispatch(new RegisterUserAction({ data: model }));
  }

  createForm() {
    this.form = this.fb.group({
      UserName: null,
      Email: null,
      Password: null,
      ConfirmPassword: null
    });
  }

  ngOnDestroy() {
    this.store.dispatch(new RegisterUserClearAction({ id: 0 }));
  }

}
