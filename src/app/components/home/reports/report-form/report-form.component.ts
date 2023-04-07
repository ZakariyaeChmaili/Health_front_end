import { Component, Inject, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { ReloadService } from 'src/app/components/home/services/reload/reload.service';

@Component({
  selector: 'app-report-form',
  templateUrl: './report-form.component.html',
  styleUrls: ['./report-form.component.scss']
})
export class ReportFormComponent implements OnInit {
  traitementFlag = false;
  reportFromGroup : FormGroup;


  constructor(private fb: FormBuilder,
    @Inject(MAT_DIALOG_DATA) public data:any,
    private dialogRef:MatDialogRef<ReportFormComponent>,
    ) {
    // console.log(this.hideRequiredControl)
    this.reportFromGroup = this.fb.group({
      titre: [''],
      datecrea: [''],
      patient_id: [456],
      doctor_id: [123],
      traitement_id: [654],
      traitments:this.fb.array([])
    });


    console.log(this.traitementFlag);
  }

   getTraitment(){
    return this.reportFromGroup.get('traitments') as FormArray;
  }

  addTraitment(){
    console.log(this.getTraitment().controls)
    const traitment = this.fb.group({
      name:[''],
      period:['']
    })
    this.getTraitment().push(traitment);
  }
  deleteTraitment(index:number){
    this.getTraitment().removeAt(index);
  }
  ngOnInit(): void {
    // throw new Error('Method not implemented.');
  }

  addReport(){
    console.log(this.reportFromGroup.value);
    this.data = this.reportFromGroup.value;
    this.dialogRef.close(this.reportFromGroup.value);

  }

  showTraitment(){

    this.traitementFlag = !this.traitementFlag;
    console.log(this.traitementFlag);
  }
}
