import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { PatientCodeDialogComponent } from 'src/app/components/home/sidebar/patient-code-dialog/patient-code-dialog.component';


@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent {
  flag : boolean = JSON.parse(localStorage.getItem('user')!).role=='doctor' ? false : true;
    constructor(public dialog:MatDialog,private route:Router) { }
    openDialog() {
      const dialogRef = this.dialog.open(PatientCodeDialogComponent,);
      dialogRef.afterClosed().subscribe((result) => {
        // console.log(`Dialog result: ${result}`);
        this.flag = true;
        this.route.navigate(['/home/reports']);
      });
    }
}
