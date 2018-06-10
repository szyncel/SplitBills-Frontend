import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { RegisterDialogComponent } from './register-dialog/register-dialog.component';
import { MatDialogModule, MatIconModule } from '@angular/material';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    MatDialogModule,
    FormsModule, ReactiveFormsModule,
    MatIconModule
  ],
  declarations: [LoginComponent, RegisterDialogComponent],
  entryComponents: [RegisterDialogComponent]
})
export class AuthModule {
}
