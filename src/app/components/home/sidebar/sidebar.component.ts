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
  flag: boolean = false;
    constructor(public dialog:MatDialog,private route:Router) { }
    openDialog() {
      const dialogRef = this.dialog.open(PatientCodeDialogComponent, {
        data: {
          animal: 'panda',
        },
      });
      dialogRef.afterClosed().subscribe((result) => {
        // console.log(`Dialog result: ${result}`);
        this.flag = true;
        this.route.navigate(['/home/reports']);
      });
    }
}
