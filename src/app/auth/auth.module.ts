import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegisterDialogComponent } from './register-dialog/register-dialog.component';
import { MatDialogModule, MatFormFieldModule, MatIconModule } from '@angular/material';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    MatDialogModule,
    FormsModule, ReactiveFormsModule,
    MatIconModule,
    MatFormFieldModule
  ],
  declarations: [ RegisterDialogComponent],
  entryComponents: [RegisterDialogComponent]
})
export class AuthModule {
}
