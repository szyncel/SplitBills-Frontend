import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GuestComponent } from './guest.component';
import { HomeComponent } from './home/home.component';
import { GuestRoutingModule } from './guest-routing.module';

@NgModule({
  imports: [
    CommonModule,
    GuestRoutingModule
  ],
  declarations: [GuestComponent, HomeComponent]
})
export class GuestModule { }
