import { LiveAnnouncer } from '@angular/cdk/a11y';
import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort, Sort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { ReportFormComponent } from 'src/app/components/home/reports/report-form/report-form.component';
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
  role : boolean = JSON.parse(localStorage.getItem('user')!).role=='doctor' ? true : false;

  displayedColumns: string[] = [
    'id',
    'titre',
    'datecrea',
    'doctor_id',
    'patient_id',
    'traitement_id',
  ];
  dataSource!: MatTableDataSource<Report>;

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  constructor(private reportService: ReportService,public dialog : MatDialog) {
    this.getReport();
  }

  getReport() {
    this.reportService.getReport().subscribe({
      next: (res: any) => {
        this.dataSource = new MatTableDataSource<Report>(res);
      },
      error: (err: any) => {
        console.log(err);
      },
    });
  }
  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }



  reportForm(){
    const dialogRef = this.dialog.open(ReportFormComponent);
    dialogRef.afterClosed().subscribe(result => {
      console.log(result);
      this.reportService.addReport(result).subscribe({
        next: (res: any) => {
          this.getReport();
        }
      });
    }
    );


  }
}
