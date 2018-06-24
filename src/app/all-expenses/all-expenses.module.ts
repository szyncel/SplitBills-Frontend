import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AllExpensesComponent } from './all-expenses.component';
import { AllExpensesListComponent } from './list/list.component';
import { AllExpensesRoutingModule } from './all-expenses-routing.module';

@NgModule({
  imports: [
    CommonModule,
    AllExpensesRoutingModule
  ],
  declarations: [AllExpensesComponent, AllExpensesListComponent]
})
export class AllExpensesModule { }
