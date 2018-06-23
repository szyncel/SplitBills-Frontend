import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DetailsComponent } from './details/details.component';
import { FriendsComponent } from './friends.component';
import { FriendsRoutingModule } from './friends-routing.module';

@NgModule({
  imports: [
    CommonModule,
    FriendsRoutingModule
  ],
  declarations: [DetailsComponent, FriendsComponent]
})
export class FriendsModule {
}
