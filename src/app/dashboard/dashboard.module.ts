import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard.component';
import { SalesComponent } from './sales/sales.component';
import { ProfitComponent } from './profit/profit.component';
import { TodaySalesComponent } from './sales/today-sales/today-sales.component';
import { WeekSalesComponent } from './sales/week-sales/week-sales.component';

const routes: Routes = [
  { path: '', component: DashboardComponent },
  { path: 'sales', component: SalesComponent,  children: [
    { path: 'today-sales', component: TodaySalesComponent },
    { path: 'week-sales', component: WeekSalesComponent },
    { path: '', redirectTo: 'today-sales', pathMatch: 'full' },
  ], },
  { path: 'profit', component: ProfitComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  declarations: [
    SalesComponent,
    ProfitComponent,
    TodaySalesComponent,
    WeekSalesComponent
  ],
})
export class DashboardModule {}

