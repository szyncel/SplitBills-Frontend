import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard.component';
import { ListComponent } from './list/list.component';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { MatButtonModule, MatToolbarModule } from '@angular/material';

@NgModule({
  imports: [
    CommonModule,
    DashboardRoutingModule,
    MatToolbarModule,
    MatButtonModule
  ],
  declarations: [DashboardComponent, ListComponent]
})
export class DashboardModule {
}
