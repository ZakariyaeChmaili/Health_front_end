import { Component, Inject, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
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
    private snackBar : MatSnackBar
    ) {
    // console.log(this.hideRequiredControl)
    let user:any = JSON.parse(localStorage.getItem("user")!);
    let patient : any = JSON.parse(localStorage.getItem("patient")!);
    this.reportFromGroup = this.fb.group({
      titre: ['',Validators.required],
      datecrea: ['',Validators.required],
      doctor: {id:user.id},
      patient: {id:patient.id},
      description: ['',Validators.required],
      bloodPressure:['',Validators.required],
      bloodSugar:['',Validators.required],
      heartBeat:['',Validators.required],
      temperature:['',Validators.required],
      listeTraitement:this.fb.array([])
    });


    console.log(this.traitementFlag);
  }

   getTraitment(){
    return this.reportFromGroup.get('listeTraitement') as FormArray;
  }

  addTraitment(){
    console.log(this.getTraitment().controls)
    const traitment = this.fb.group({
      nomtraimenet:[''],
      period:[''],
      dose:['']
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
    this.snackBar.open('adding report...');
    console.log(this.reportFromGroup.value);
    this.data = this.reportFromGroup.value;
    if(this.reportFromGroup.valid)
    this.dialogRef.close(this.reportFromGroup.value);

  }

  showTraitment(){

    this.traitementFlag = !this.traitementFlag;
    console.log(this.traitementFlag);
  }
}
