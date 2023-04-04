import { ProfileComponent } from './profile/profile.component';
import { ReportsComponent } from './reports/reports.component';
import { HomeIndexComponent } from './home-index.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { VaccineComponent } from 'src/app/components/home/vaccine/vaccine.component';

const routes: Routes = [
  {path:'',pathMatch:'full',redirectTo:'profile'},
  {path:'', component:HomeIndexComponent,children:[
    {path:'reports', component:ReportsComponent},
    {path:'vaccines',component:VaccineComponent},
    {path:'profile',component:ProfileComponent},
  ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
