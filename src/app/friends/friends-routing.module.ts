import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FriendsComponent } from './friends.component';
import { DetailsComponent } from './details/details.component';

const routes: Routes = [
  {
    path: '', component: FriendsComponent, children: [
      { path: '', redirectTo: 'friends', pathMatch: 'full' },
      { path: ':id', component: DetailsComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: []
})
export class FriendsRoutingModule {
}
