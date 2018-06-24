import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ActivityComponent } from './activity.component';
import { ActivityListComponent } from './list/list.component';

const routes: Routes = [
  {
    path: '', component: ActivityComponent, children: [
      { path: '', redirectTo: 'activity', pathMatch: 'full' },
      { path: '', component: ActivityListComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: []
})
export class ActivityRoutingModule {
}
