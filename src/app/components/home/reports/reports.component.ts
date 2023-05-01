import { LiveAnnouncer } from '@angular/cdk/a11y';
import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatSort, Sort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { ReportFormComponent } from 'src/app/components/home/reports/report-form/report-form.component';
import { GeneratedCodeService } from 'src/app/components/home/services/generatedCode/generated-code.service';
import { ReportService } from 'src/app/components/home/services/report/report.service';

export interface Report {
  id: number;
  datecrea: string;
  titre: number;
  doctor_id: number;
  patient_id: number;
  traitement_id: number;
}

@Component({
  selector: 'app-reports',
  templateUrl: './reports.component.html',
  styleUrls: ['./reports.component.scss'],
})
export class ReportsComponent implements AfterViewInit {
  kword: string = '';
  flag: boolean;
  user: any = JSON.parse(localStorage.getItem('user')!);
  patient: any = JSON.parse(localStorage.getItem('patient')!);
  id: number;
  displayedColumns: string[] = ['id_Repo', 'titre','description', 'datecrea', 'details'];
  dataSource!: MatTableDataSource<Report>;

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  constructor(
    private reportService: ReportService,
    public dialog: MatDialog,
    private route: Router,
    private generatedCodeService: GeneratedCodeService,
    private snackBar : MatSnackBar
  ) {
    console.log('you are in reports');
    this.flag = this.user.role == 'doctor' ? true : false;
    if (this.user.role == 'doctor') {
      this.generatedCodeService
        .getGeneratedCode(
          JSON.parse(localStorage.getItem('user')!).patientGeneratedCode
        )
        .subscribe({
          next: (res: any) => {
            console.log(res);
            if (!res) {
              this.route.navigate(['/block']);
            }
          },
        });

      this.id = JSON.parse(localStorage.getItem('patient')!).id;
    } else {
      this.id = this.user.id;
    }
    this.getReport();
  }

  getReport() {
    this.reportService.getReports(this.id).subscribe({
      next: (res: any) => {
        this.dataSource = new MatTableDataSource<Report>(res);
      },
      error: (err: any) => {
        console.log(err);
      },
    });
  }
  ngAfterViewInit() {
  }

  reportForm() {
    const dialogRef = this.dialog.open(ReportFormComponent);
    dialogRef.afterClosed().subscribe((result) => {
      console.log(result);
      if (result) {
        this.reportService.addReport(result).subscribe({
          next: (res: any) => {
            this.snackBar.open('Report added successfully', 'close', {duration: 2000});
            this.getReport();
          },
        });
      }
    });
  }

  searchReport() {
    if (this.kword == '') {
      this.getReport();
      return;
    }
    console.log(this.kword);
    this.reportService.searchReport(this.kword, this.id).subscribe({
      next: (res: any) => {
        this.dataSource = new MatTableDataSource<Report>(res);
      },
    });
  }
}
