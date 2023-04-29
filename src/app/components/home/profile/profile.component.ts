import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { PatientService } from 'src/app/components/home/services/patient/patient.service';
import { PersonService } from 'src/app/components/home/services/person/person.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss'],
})
export class ProfileComponent implements OnInit {
  profileFormGroup!: FormGroup;
  user: any;
  isDoctor: boolean;
  constructor(private fb: FormBuilder,
    private doctorService : PersonService,
    private patientService: PatientService) {
    this.user = JSON.parse(localStorage.getItem('user')!);
    this.isDoctor = this.user.role == 'doctor' ? true : false;
    this.profileFormGroup = this.fb.group({
      addresse: [this.user?.addresse || '', Validators.required],
      nom: [this.user?.nom || '', Validators.required],
      prenom: [this.user?.prenom || '', Validators.required],
      tel: [this.user?.tel || '', Validators.required],
      nationality: [this.user?.nationality || '', Validators.required],
      ville: [this.user?.ville || '', Validators.required],
      sutuaFamil: [this.user?.sutuaFamil || '', Validators.required],
      datenaiss: [this.user?.datenaiss || '', Validators.required],
      poids: [this.user?.poids || '', Validators.required],
      nompere: [this.user?.nompere || '', Validators.required],
      nommere: [this.user?.nommere || '', Validators.required],
      cni: [this.user?.cni || '', Validators.required],
      sexe: [this.user?.sexe || '', Validators.required],
    });
  }

  ngOnInit(): void {
    // throw new Error('Method not implemented.');
  }

  updatePerson(){
    console.log(this.profileFormGroup.value);
    if(this.isDoctor){
      this.doctorService.updateDoctor(this.profileFormGroup.value,this.user.id).subscribe({
        next: (res:any)=>{
          console.log(res);
          localStorage.setItem('user',JSON.stringify(res));
        }
      })
    }else{
      this.patientService.updatePatient(this.profileFormGroup.value,this.user.id).subscribe({
        next: (res:any)=>{
          console.log(res);
          localStorage.setItem('user',JSON.stringify(res));
        }
      })

    }
  }
}
