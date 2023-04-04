import { ProfileComponent } from './profile/profile.component';
import { ReportsComponent } from './reports/reports.component';
import { HomeIndexComponent } from './home-index.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path:'',pathMatch:'full',redirectTo:'reports'},
  {path:'', component:HomeIndexComponent,children:[
    {path:'reports', component:ReportsComponent},
    {path:'profile',component:ProfileComponent}
  ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
