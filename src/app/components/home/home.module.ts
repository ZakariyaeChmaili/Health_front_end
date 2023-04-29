import { MatIconModule } from '@angular/material/icon';
import { NgModule } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeIndexComponent } from './home-index.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { NavbarComponent } from './navbar/navbar.component';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatButtonModule} from '@angular/material/button'
import {MatListModule} from '@angular/material/list'
import {MatToolbarModule} from '@angular/material/toolbar'
import {MatMenuModule} from '@angular/material/menu'
import {MatGridListModule} from '@angular/material/grid-list';
import { ReportsComponent } from './reports/reports.component';
import {MatTableModule} from '@angular/material/table';
import {MatPaginatorModule} from '@angular/material/paginator';
import { MatInputModule } from '@angular/material/input';
import { CodeGeneratorComponent } from './navbar/code-generator/code-generator.component';
import {MatDialogModule} from '@angular/material/dialog';
import { ProfileComponent } from './profile/profile.component';
import { PatientCodeDialogComponent } from './sidebar/patient-code-dialog/patient-code-dialog.component';
import { VaccineComponent } from './vaccine/vaccine.component';
import { ReportFormComponent } from './reports/report-form/report-form.component';
import {MatCheckboxModule} from '@angular/material/checkbox';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReportDetailsComponent } from './report-details/report-details.component';
import { MatCardModule } from '@angular/material/card';
import {MatChipsModule} from '@angular/material/chips';
import {MatExpansionModule} from '@angular/material/expansion';
import { VaccineFormComponent } from './vaccine/vaccine-form/vaccine-form.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { NgChartsModule } from 'ng2-charts';
import { MatOptionModule } from '@angular/material/core';
import { MatSelectModule } from '@angular/material/select';
import { AiPredictorComponent } from './sidebar/ai-predictor/ai-predictor.component';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';

@NgModule({
  declarations: [
    HomeIndexComponent,
    SidebarComponent,
    NavbarComponent,
    ReportsComponent,
    CodeGeneratorComponent,
    ProfileComponent,
    PatientCodeDialogComponent,
    VaccineComponent,
    ReportFormComponent,
    ReportDetailsComponent,
    VaccineFormComponent,
    DashboardComponent,
    AiPredictorComponent,

  ],
  providers: [DatePipe],
  imports: [
    FormsModule,
    ReactiveFormsModule,
    CommonModule,
    HomeRoutingModule,
    MatSidenavModule,
    MatButtonModule,
    MatIconModule,
    MatListModule,
    MatToolbarModule,
    MatMenuModule,
    MatGridListModule,
    MatTableModule,
    MatPaginatorModule,
    MatInputModule,
    MatDialogModule,
    MatCheckboxModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatCardModule,
    MatChipsModule,
    MatOptionModule,
    MatSelectModule,
    MatExpansionModule,
    NgChartsModule,
    MatProgressSpinnerModule

  ]
})
export class HomeModule { }
