import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AllExpensesModule } from './all-expenses/all-expenses.module';

const routes: Routes = [
  {
    path: '',
    loadChildren: './guest/guest.module#GuestModule',
  },
  {
    path: 'dashboard',
    loadChildren: './dashboard/dashboard.module#DashboardModule',
  },
  {
    path: 'friends',
    loadChildren: './friends/friends.module#FriendsModule',
  },
  {
    path: 'activity',
    loadChildren: './activity/activity.module#ActivityModule',
  },
  {
    path: 'all',
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
