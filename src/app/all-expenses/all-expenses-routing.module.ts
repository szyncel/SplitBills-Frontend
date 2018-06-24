import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AllExpensesComponent } from './all-expenses.component';
import { AllExpensesListComponent } from './list/list.component';

const routes: Routes = [
  {
    path: '', component: AllExpensesComponent, children: [
      { path: '', redirectTo: 'all', pathMatch: 'full' },
      { path: '', component: AllExpensesListComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: []
})
export class AllExpensesRoutingModule {
}
