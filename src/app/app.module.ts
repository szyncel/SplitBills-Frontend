import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import {
  MatButtonModule,
  MatDialogModule, MatDividerModule, MatIconModule,
  MatListModule,
  MatSidenavModule,
  MatSnackBarModule,
  MatToolbarModule
} from '@angular/material';
import { SharedModule } from './shared/shared.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppStoreModule } from './store/app-store.module';
import { AppRoutingModule } from './app-routing.module';
import { HTTP_INTERCEPTORS, HttpClient, HttpClientModule } from '@angular/common/http';
import { TokenInterceptor } from './shared/interceptors/token-interceptor';
import { registerLocaleData } from '@angular/common';
import localePl from '@angular/common/locales/pl';
import { HubConnection } from '@aspnet/signalr';
import { ActivityListComponent } from './activity/list/list.component';
import { ListComponent } from './dashboard/list/list.component';
import { HomeComponent } from './guest/home/home.component';

registerLocaleData(localePl);

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    MatToolbarModule,
    MatDialogModule,
    MatSnackBarModule,
    AppRoutingModule,
    SharedModule,
    MatSidenavModule,
    MatListModule,
    MatDividerModule,
    MatIconModule,
    BrowserAnimationsModule,
    AppStoreModule,
    MatButtonModule
  ],
  providers: [HttpClient,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptor,
      multi: true
    },
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
