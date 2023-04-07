import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { GeneratedCodeService } from 'src/app/components/home/services/generatedCode/generated-code.service';

@Component({
  selector: 'app-patient-code-dialog',
  templateUrl: './patient-code-dialog.component.html',
  styleUrls: ['./patient-code-dialog.component.scss'],
})
export class PatientCodeDialogComponent {
  code: string = '';

  constructor(
    // @Inject(MAT_DIALOG_DATA) public data:any,
    private dialogRef: MatDialogRef<PatientCodeDialogComponent>,
    private generatedCodeService: GeneratedCodeService
  ) {}
  close() {
    // this.data=this.code;
    this.generatedCodeService.getGeneratedCode(this.code).subscribe({
      next: (res: any) => {
        console.log(res);
        if (res.length > 0) {
          this.dialogRef.close(res);
        }
      },
    });
  }
}
