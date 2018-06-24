import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivityComponent } from './activity.component';
import { ActivityListComponent } from './list/list.component';
import { ActivityRoutingModule } from './activity-routing.module';

@NgModule({
  imports: [
    CommonModule,
    ActivityRoutingModule
  ],
  declarations: [ActivityComponent, ActivityListComponent]
})
export class ActivityModule { }
