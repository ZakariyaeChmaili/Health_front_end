import { ProfileComponent } from './profile/profile.component';
import { ReportsComponent } from './reports/reports.component';
import { HomeIndexComponent } from './home-index.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { VaccineComponent } from 'src/app/components/home/vaccine/vaccine.component';
import { ReportsGuard } from 'src/app/guards/reports.guard';
import { ReportDetailsComponent } from 'src/app/components/home/report-details/report-details.component';
import { DashboardComponent } from 'src/app/components/home/dashboard/dashboard.component';
import { AuthenticationGuard } from 'src/app/guards/authentication.guard';

const routes: Routes = [
  {path:'',pathMatch:'full',redirectTo:'profile'},
  {path:'',component:HomeIndexComponent,children:[
    {path:'reports',canActivate:[ReportsGuard], component:ReportsComponent},
    {path:'reports/:id',canActivate:[ReportsGuard], component:ReportDetailsComponent},
    {path:'vaccines',component:VaccineComponent,canActivate:[ReportsGuard]},
    {path:'profile',component:ProfileComponent},
    {path:'dashboard',component:DashboardComponent}
  ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
