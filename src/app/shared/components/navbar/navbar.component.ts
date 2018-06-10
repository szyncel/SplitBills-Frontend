import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { RegisterDialogComponent } from '../../../auth/register-dialog/register-dialog.component';
import { TestDialogComponent } from './test-dialog/test-dialog.component';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  constructor(private dialog: MatDialog) {
  }

  ngOnInit() {
  }

  openRegisterDialog() {
    let dialogRef = this.dialog.open(RegisterDialogComponent, {
      width: '400px'
    });
    dialogRef.afterClosed().subscribe(() => {
      dialogRef = null;
    });
  }

}
