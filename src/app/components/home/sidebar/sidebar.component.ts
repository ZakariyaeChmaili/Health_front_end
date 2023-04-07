import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { PatientService } from 'src/app/components/home/services/patient/patient.service';
import { PatientCodeDialogComponent } from 'src/app/components/home/sidebar/patient-code-dialog/patient-code-dialog.component';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
})
export class SidebarComponent {
  flag: boolean;
  user: any;
  constructor(
    public dialog: MatDialog,
    private route: Router,
    private patientService: PatientService
  ) {
    console.log("you are in sidebar");
    this.user = JSON.parse(localStorage.getItem('user')!);
    if((this.user.role=='doctor'&&localStorage.getItem('patient'))||this.user.role=='patient'){
      this.flag=true;
    }else
    this.flag=false;
    // this.flag = this.user.role == 'doctor' ? false : true;
  }
  openDialog() {
    const dialogRef = this.dialog.open(PatientCodeDialogComponent);
    dialogRef.afterClosed().subscribe((result) => {
      console.log(result);
      if (result) {
        this.patientService.getPatient(result[0].patient_id).subscribe({
          next: (res: any) => {
            this.user.patientGeneratedCode = result[0].code;
            localStorage.setItem('user', JSON.stringify(this.user));
            localStorage.setItem('patient', JSON.stringify(res[0]));
            console.log(res);
            this.flag = true;
            this.route.navigate(['/home/reports']);
          },
        });

      }
      // this.flag = true;
      // this.route.navigate(['/home/reports']);
    });
  }
}
