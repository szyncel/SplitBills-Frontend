import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivityComponent } from './activity.component';
import { ActivityListComponent } from './list/list.component';
import { ActivityRoutingModule } from './activity-routing.module';
import { MatTableModule } from '@angular/material';

@NgModule({
  imports: [
    CommonModule,
    ActivityRoutingModule,
    MatTableModule
  ],
  declarations: [ActivityComponent, ActivityListComponent]
})
export class ActivityModule { }
