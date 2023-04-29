import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AuthenticationService } from 'src/app/components/authentication/services/authentication.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss'],
})
export class SignupComponent {
  personneForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private authenticationService: AuthenticationService
  ) {
    this.personneForm = this.fb.group({
      cni: ['', Validators.required],
      nom: ['', Validators.required],
      prenom: ['', Validators.required],
      datenaiss: ['', Validators.required],
      ville: ['', Validators.required],
      nasionality: ['', Validators.required],
      sexe: ['', Validators.required],
      sutuaFamil: ['', Validators.required],
      tel: ['', Validators.required],
      addresse: ['', Validators.required],
      password: ['', Validators.required],
      cpassword: ['', Validators.required],
      nommere: ['', Validators.required],
      nompere: ['', Validators.required],
      poids: ['', Validators.required],
      role: ['patient'],
    });
  }

  ngOnInit(): void {}

  onSubmit() {
    const personne: any = this.personneForm.value;
    console.log(personne);

    this.authenticationService.signup(this.personneForm.value).subscribe({
      next: (data) => {
        console.log(data);
      },
      error:err=>{
        console.log(err)
      }
    });
    // Add logic here to send the form data to the server or perform any other required actions
  }
}
