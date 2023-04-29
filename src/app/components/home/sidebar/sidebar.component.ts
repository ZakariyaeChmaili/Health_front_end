import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { PatientService } from 'src/app/components/home/services/patient/patient.service';
import { PersonService } from 'src/app/components/home/services/person/person.service';
import { AiPredictorComponent } from 'src/app/components/home/sidebar/ai-predictor/ai-predictor.component';
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
    private patientService: PatientService,
    private personService: PersonService
  ) {
    console.log('you are in sidebar');
    this.user = JSON.parse(localStorage.getItem('user')!);
    if (
      (this.user.role == 'doctor' && localStorage.getItem('patient')) ||
      this.user.role == 'patient'
    ) {
      this.flag = true;
    } else this.flag = false;
  }
  openDialog() {
    const dialogRef = this.dialog.open(PatientCodeDialogComponent);
    dialogRef.afterClosed().subscribe((result) => {
      console.log(result);
      if (result) {
        console.log(result);
        this.personService.getPerson(result.idpatient).subscribe({
          next: (res: any) => {
            console.log(res);
            localStorage.setItem('patient', JSON.stringify(res));
            this.flag = true;
          },
        });
      }
    });
  }

  openAi(){
    const dialogRef = this.dialog.open(AiPredictorComponent)
  }
}
