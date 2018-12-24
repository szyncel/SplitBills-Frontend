import { Component, OnDestroy, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material';
import { FormBuilder, FormGroup } from '@angular/forms';
import { AppState } from '../../../store';
import { Store } from '@ngrx/store';
import { LoginUserAction } from '../../../store/auth/actions/auth.actions';
import { Auth } from '../../../store/auth/models/auth';
import { Observable, Subject } from 'rxjs';
import { getAuthLoadingState, getAuthSuccessState } from '../../../store/auth/selectors/auth.selectors';
import { filter, takeUntil } from 'rxjs/operators';

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
    this.initDialogCloseHandler();
  }

  onSubmit(): void {
    const form = this.form.value;
    const model = {
      UserName: form.UserName,
      Password: form.Password
    } as Auth;
    this.store.dispatch(new LoginUserAction({ data: model }));
  }

  createForm(): void {
    this.form = this.fb.group({
      UserName: null,
      Password: null
    });
  }

  ngOnDestroy() {
    this.destroyed$.next(true);
  }

  private initDialogCloseHandler(): void {
    this.success$.pipe(
      filter((success: boolean) => !!success),
      takeUntil(this.destroyed$)
    ).subscribe(() => {
      this.dialogRef.close();
    });
  }

}
