import { Component, OnDestroy, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material';
import { FormBuilder, FormGroup } from '@angular/forms';
import { RegisterDialogComponent } from '../../../auth/register-dialog/register-dialog.component';
import { AppState, getAuthState } from '../../../store';
import { Store } from '@ngrx/store';
import { User } from '../../../store/auth/models/user';
import { LoginUserAction, RegisterUserAction } from '../../../store/auth/actions/auth.actions';
import { Auth } from '../../../store/auth/models/auth';
import { Observable } from 'rxjs/Observable';
import { getAuthLoadingState, getAuthLogin, getAuthSuccessState } from '../../../store/auth/selectors/auth.selectors';
import { Subject } from 'rxjs/Subject';
import 'rxjs/add/operator/filter';

@Component({
  selector: 'app-login-dialog',
  templateUrl: './login-dialog.component.html',
  styleUrls: ['./login-dialog.component.scss']
})
export class LoginDialogComponent implements OnInit, OnDestroy {

  form: FormGroup;

  loading$: Observable<boolean>;

  success$;

  private destroyed$: Subject<boolean> = new Subject();

  constructor(private fb: FormBuilder,
              private dialogRef: MatDialogRef<LoginDialogComponent>,
              private store: Store<AppState>) {
  }

  ngOnInit() {
    this.createForm();
    this.loading$ = this.store.select(getAuthLoadingState);
    this.success$ = this.store.select(getAuthSuccessState);
    this.success$.subscribe(res => console.log('suc', res));
    this.initDialogCloseHandler();
  }

  onSubmit() {
    const form = this.form.value;
    const model = {
      UserName: form.UserName,
      Password: form.Password
    } as Auth;
    this.store.dispatch(new LoginUserAction({ data: model }));
  }

  createForm() {
    this.form = this.fb.group({
      UserName: null,
      Password: null
    });
  }

  ngOnDestroy() {
    this.destroyed$.next(true);
  }

  private initDialogCloseHandler(): void {
    this.success$
      .filter((success: boolean) => !!success)
      .takeUntil(this.destroyed$)
      .subscribe(() => {
        this.dialogRef.close();
      });
  }

}
