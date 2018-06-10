import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Observable } from 'rxjs/Observable';
import { MatDialogRef, MatSnackBar } from '@angular/material';
import { Store } from '@ngrx/store';
import { AppState } from '../../store';
import { User } from '../../store/auth/models/user';
import { RegisterUserAction } from '../../store/auth/actions/auth.actions';

@Component({
  selector: 'app-register-dialog',
  templateUrl: './register-dialog.component.html',
  styleUrls: ['./register-dialog.component.scss']
})
export class RegisterDialogComponent implements OnInit, OnDestroy {

  form: FormGroup;

  loading$: Observable<boolean>;

  constructor(private fb: FormBuilder,
              private dialogRef: MatDialogRef<RegisterDialogComponent>,
              private store: Store<AppState>) {
  }

  ngOnInit() {

  }

  onSubmit() {
    const model = {
      UserName: 'Pio123',
      Email: 'email@email.com',
      Password: '123123',
      ConfirmPassword: '123123',
    } as User;
    this.store.dispatch(new RegisterUserAction({ data: model }));
  }

  ngOnDestroy() {

  }

}
