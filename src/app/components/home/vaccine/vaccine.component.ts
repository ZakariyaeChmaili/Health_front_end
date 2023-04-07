import { Component, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { GeneratedCodeService } from 'src/app/components/home/services/generatedCode/generated-code.service';
import { ReportService } from 'src/app/components/home/services/report/report.service';
import { VaccineService } from 'src/app/components/home/services/vaccine/vaccine.service';

export interface Vaccine {
  id: number;
  observation: string;
  type: string;
  doctor_id: number;
  patient_id: number;
}

@Component({
  selector: 'app-vaccine',
  templateUrl: './vaccine.component.html',
  styleUrls: ['./vaccine.component.scss'],
})
export class VaccineComponent {
  flag: boolean =
    JSON.parse(localStorage.getItem('user')!).role == 'doctor' ? true : false;
  user: any;
  id: number;
  displayedColumns: string[] = [
    'id',
    'observation',
    'type',
    'patient_id',
    'doctor_id',
  ];
  dataSource!: MatTableDataSource<Vaccine>;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  constructor(
    private vaccineService: VaccineService,
    private route: Router,
    private generatedCodeService: GeneratedCodeService
  ) {
    this.user = JSON.parse(localStorage.getItem('user')!);
    this.flag = this.user.role == 'doctor' ? true : false;
    if (this.user.role == 'doctor') {
      this.generatedCodeService
        .getGeneratedCode(
          JSON.parse(localStorage.getItem('user')!).patientGeneratedCode
        )
        .subscribe({
          next: (res: any) => {
            console.log(res);
            if (!res[0]) {
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
    this.vaccineService.getVaccine(this.id).subscribe({
      next: (res: any) => {
        this.dataSource = new MatTableDataSource<Vaccine>(res);
        console.log(res);
      },
      error: (err: any) => {
        console.log(err);
      },
    });
  }
  ngAfterViewInit() {
    // this.dataSource.paginator = this.paginator;
  }
}
