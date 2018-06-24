import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './components/navbar/navbar.component';
import {
  MatButtonModule,
  MatDialogModule,
  MatFormFieldModule,
  MatIconModule, MatInputModule, MatListModule, MatMenuModule,
  MatSidenavModule,
  MatToolbarModule
} from '@angular/material';
import { SidenavComponent } from './components/sidenav/sidenav.component';
import { AppRoutingModule } from '../app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { RegisterDialogComponent } from '../auth/register-dialog/register-dialog.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LoginDialogComponent } from './components/login-dialog/login-dialog.component';
import { FriendListComponent } from './components/friend-list/friend-list.component';
import { RightSidenavComponent } from './components/right-sidenav/right-sidenav.component';

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
    MatListModule,
    MatMenuModule
  ],
  declarations: [
    NavbarComponent,
    SidenavComponent,
    RegisterDialogComponent,
    LoginDialogComponent,
    FriendListComponent,
    RightSidenavComponent
  ],
  exports: [NavbarComponent, FriendListComponent, RightSidenavComponent],
  providers: [],
  entryComponents: [RegisterDialogComponent, LoginDialogComponent]
})
export class SharedModule {
}
