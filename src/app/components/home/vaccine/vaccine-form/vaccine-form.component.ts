import { Component, Inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-vaccine-form',
  templateUrl: './vaccine-form.component.html',
  styleUrls: ['./vaccine-form.component.scss'],
})
export class VaccineFormComponent {
  vaccineFormGroup: FormGroup;
  constructor(
    private fb: FormBuilder,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private dialogRef: MatDialogRef<VaccineFormComponent>,
    private snackBar: MatSnackBar
  ) {
    let user:any = JSON.parse(localStorage.getItem("user")!);
    let patient : any = JSON.parse(localStorage.getItem("patient")!);
    this.vaccineFormGroup = this.fb.group({
      observation: ['',Validators.required],
      datecrea: ['',Validators.required],
      type: ['',Validators.required],
      doctor: {id:user.id},
      patient: {id:patient.id},
    });
  }

  addVaccine() {
    this.snackBar.open('adding vaccine...');
    console.log(this.vaccineFormGroup.value);
    if (this.vaccineFormGroup.valid) {
      this.dialogRef.close(this.vaccineFormGroup.value);
    }
  }
}
