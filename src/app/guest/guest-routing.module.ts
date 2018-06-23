import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GuestComponent } from './guest.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {
    path: '', component: GuestComponent, children: [
      { path: '', redirectTo: 'home', pathMatch: 'full' },
      { path: '', component: HomeComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: []
})
export class GuestRoutingModule {
}
