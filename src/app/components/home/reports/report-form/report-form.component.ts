import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-report-form',
  templateUrl: './report-form.component.html',
  styleUrls: ['./report-form.component.scss']
})
export class ReportFormComponent implements OnInit {
  // hideRequiredControl = new FormControl(false);
  reportFromGroup : FormGroup;


  constructor(private fb: FormBuilder,@Inject(MAT_DIALOG_DATA) public data:any,private dialogRef:MatDialogRef<ReportFormComponent>) {
    // console.log(this.hideRequiredControl)
    this.reportFromGroup = this.fb.group({
      titre: [''],
      datecrea: [''],
      patient_id: [456],
      doctor_id: [123],
      traitement_id: [654],
    });
  }
  ngOnInit(): void {
    // throw new Error('Method not implemented.');
  }

  addReport(){
    console.log(this.reportFromGroup.value);
    this.data = this.reportFromGroup.value;
    this.dialogRef.close(this.reportFromGroup.value);
  }
}
