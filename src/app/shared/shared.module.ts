import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './components/navbar/navbar.component';
import {
  MatButtonModule,
  MatDialogModule,
  MatFormFieldModule,
  MatIconModule, MatInputModule, MatListModule,
  MatSidenavModule,
  MatToolbarModule
} from '@angular/material';
import { SidenavComponent } from './components/sidenav/sidenav.component';
import { AppRoutingModule } from '../app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { RegisterDialogComponent } from '../auth/register-dialog/register-dialog.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TestDialogComponent } from './components/navbar/test-dialog/test-dialog.component';
import { LoginDialogComponent } from './components/login-dialog/login-dialog.component';
import { FriendListComponent } from './components/friend-list/friend-list.component';

@NgModule({
  imports: [
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    CommonModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    HttpClientModule,
    MatIconModule,
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
    MatListModule
  ],
  declarations: [
    NavbarComponent,
    SidenavComponent,
    RegisterDialogComponent,
    TestDialogComponent,
    LoginDialogComponent,
    FriendListComponent
  ],
  exports: [NavbarComponent, FriendListComponent],
  providers: [],
  entryComponents: [RegisterDialogComponent, TestDialogComponent, LoginDialogComponent]
})
export class SharedModule {
}
