import { Component } from '@angular/core';
import { GeneratedCodeService } from 'src/app/components/home/services/generatedCode/generated-code.service';
import {v4} from 'uuid';

@Component({
  selector: 'app-code-generator',
  templateUrl: './code-generator.component.html',
  styleUrls: ['./code-generator.component.scss']
})
export class CodeGeneratorComponent {
  generatedCode : string = '';
  buttonFlag : boolean = true;
  patient :any;
  constructor(private generatedCodeService : GeneratedCodeService) {
    this.patient = JSON.parse(localStorage.getItem('user')!);
    if(!this.patient.generatedCodeId){
      // this.buttonFlag = !this.buttonFlag;
      this.generatedCode = this.patient.generatedCode;
      this.generatedCode ='*****-*****-*****-*****-*****';
    }else{
      this.buttonFlag = !this.buttonFlag;
      this.generatedCode = this.patient.generatedCode;
    }
  }



  generateCode(){
    const code = v4();
    // const patient :any = JSON.parse(localStorage.getItem('user')!);
    this.patient.generatedCode = code;
    console.log(code)
    console.log(this.patient);
    this.generatedCodeService.generateCode(code,this.patient).subscribe({
      next: (res:any)=>{
        console.log(res);
        this.patient.generatedCodeId = res.id;
        localStorage.setItem('user',JSON.stringify(this.patient));
        this.generatedCode = code;
        this.buttonFlag = !this.buttonFlag;
      },
      error: (err:any)=>{
        console.log(err);
      }
    })

  }


  deleteCode(){
    // const patient :any = JSON.parse(localStorage.getItem('user')!);
    this.generatedCodeService.deleteCode(this.patient).subscribe({
      next: (res:any)=>{
        console.log(res);
        this.generatedCode = '*****-*****-*****-*****-*****';
        // const patient :any = JSON.parse(localStorage.getItem('user')!);
        this.patient.generatedCodeId = null;
        this.patient.generatedCode = null;
        localStorage.setItem('user',JSON.stringify(this.patient));
        this.buttonFlag = !this.buttonFlag;
      },
      error: (err:any)=>{
        console.log(err);
      }
    })
  }

}
