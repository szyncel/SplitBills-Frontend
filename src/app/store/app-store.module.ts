import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import { reducerProvider, reducerToken } from './index';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { EffectsModule } from '@ngrx/effects';
import { AuthEffects } from './auth/auth.effects';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { FriendsEffects } from './friends/friends.effects';
import { AuthService } from './auth/auth.service';
import { FriendsService } from './friends/friends.service';

@NgModule({
  imports: [
    BrowserModule,
    HttpClientModule,
    CommonModule,
    StoreModule.forRoot(reducerToken),
    EffectsModule.forRoot([
      AuthEffects,
      FriendsEffects
    ]),
    StoreDevtoolsModule.instrument({
      maxAge: 25
    })
  ],
  declarations: [],
  providers: [
    reducerProvider,
    AuthService,
    FriendsService
  ]
})
export class AppStoreModule {
}
