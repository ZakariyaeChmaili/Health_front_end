import { Component, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
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
  role : boolean = JSON.parse(localStorage.getItem('user')!).role=='doctor' ? true : false;

  displayedColumns: string[] = [
    'id',
    'observation',
    'type',
    'patient_id',
    'doctor_id',
  ];
  dataSource!: MatTableDataSource<Vaccine>;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  constructor(private vaccineService: VaccineService) {
    this.getReport();
  }

  getReport() {
    this.vaccineService.getVaccine().subscribe({
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
    this.dataSource.paginator = this.paginator;
  }
}
