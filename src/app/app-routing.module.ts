import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuardService } from './auth-guard.service';

const routes: Routes = [
  {
    path: '',
    loadChildren: './guest/guest.module#GuestModule',
  },
  {
    path: 'dashboard',
    canActivate: [AuthGuardService],
    loadChildren: './dashboard/dashboard.module#DashboardModule',
  },
  {
    path: 'friends',
    canActivate: [AuthGuardService],
    loadChildren: './friends/friends.module#FriendsModule',
  },
  {
    path: 'activity',
    canActivate: [AuthGuardService],
    loadChildren: './activity/activity.module#ActivityModule',
  },
  {
    path: 'all',
    canActivate: [AuthGuardService],
    loadChildren: './all-expenses/all-expenses.module#AllExpensesModule',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  declarations: []
})
export class AppRoutingModule {
}
