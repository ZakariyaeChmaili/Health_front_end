import { Component, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { GeneratedCodeService } from 'src/app/components/home/services/generatedCode/generated-code.service';
import { VaccineService } from 'src/app/components/home/services/vaccine/vaccine.service';
import { VaccineFormComponent } from 'src/app/components/home/vaccine/vaccine-form/vaccine-form.component';

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
  kword: string = '';
  flag: boolean =
    JSON.parse(localStorage.getItem('user')!).role == 'doctor' ? true : false;
  user: any;
  id: number;
  displayedColumns: string[] = ['id', 'observation', 'type'];
  dataSource!: MatTableDataSource<Vaccine>;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  constructor(
    private vaccineService: VaccineService,
    private route: Router,
    private generatedCodeService: GeneratedCodeService,
    public dialog: MatDialog
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
            if (!res) {
              this.route.navigate(['/block']);
            }
          },
        });

      this.id = JSON.parse(localStorage.getItem('patient')!).id;
    } else {
      this.id = this.user.id;
    }

    this.getVaccines();
  }

  getVaccines() {
    this.vaccineService.getVaccines(this.id).subscribe({
      next: (res: any) => {
        this.dataSource = new MatTableDataSource<Vaccine>(res);
        console.log(res);
      },
      error: (err: any) => {
        console.log(err);
      },
    });
  }

  vaccineForm() {
    this.dialog.open(VaccineFormComponent);
    const dialogRef = this.dialog.open(VaccineFormComponent);
    dialogRef.afterClosed().subscribe((result) => {
      console.log(result);
      if (result) {
        this.vaccineService.addVaccine(result).subscribe({
          next: (res: any) => {
            this.getVaccines();
            // this.dialog.closeAll();
          },
        });
      }
    });
  }

  searchVaccin() {
    if(this.kword == '') return this.getVaccines();
    console.log(this.kword);
    this.vaccineService.searchVaccine(this.kword, this.id).subscribe({
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
